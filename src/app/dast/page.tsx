import { CheckCircle2, ShieldAlert } from "lucide-react";

const kpis = [
  { label: "TARGET IP", value: "172.18.44.203", delta: "ASN: AS15169" },
  { label: "PAGES CRAWLED", value: "1,284", delta: "+74 / min" },
  { label: "RULES EXECUTED", value: "3,906", delta: "OWASP + custom" },
  { label: "VULNERABILITIES", value: "47", delta: "12 confirmed" },
];

const severitySummary = [
  {
    level: "CRIT",
    count: 3,
    style: "border-[#4a1b1b] bg-[#2b1010] text-[#ffb4b4]",
    sample: "RCE via template injection /admin/export",
  },
  {
    level: "HIGH",
    count: 11,
    style: "border-[#4a2e1b] bg-[#2b1b10] text-[#ffd0a8]",
    sample: "SQLi blind on /api/v1/report?sort=",
  },
  {
    level: "MED",
    count: 18,
    style: "border-[#45451c] bg-[#2a2a12] text-[#f1efad]",
    sample: "Auth bypass race condition /session/refresh",
  },
  {
    level: "LOW",
    count: 15,
    style: "border-[#1f3a2f] bg-[#11231d] text-[#b7e9cd]",
    sample: "Security headers inconsistent on /docs",
  },
];

const liveLogs = [
  "[16:40:11.902] [REQ] GET /robots.txt 200 14ms ua=ReconBot/2.3",
  "[16:40:12.318] [REQ] GET /sitemap.xml 200 19ms parsed_urls=428",
  "[16:40:12.947] [CRAWL] DISCOVERED /api/v1/users/{id} method=PATCH auth=Bearer",
  "[16:40:13.551] [TEST] IDOR probe user_id=44 -> user_id=2 status=200 anomaly=body-diff",
  "[16:40:13.772] [REQ] POST /api/v1/search payload=' OR 1=1 -- status=500",
  "[16:40:14.228] [FINDING:HIGH] SQLi fingerprint matched db=PostgreSQL confidence=0.91",
  "[16:40:14.603] [REQ] GET /admin/export?format=twig status=200",
  "[16:40:14.811] [TEST] SSTI payload={{7*7}} response=49 marker_confirmed=true",
  "[16:40:14.998] [FINDING:CRIT] Server-Side Template Injection /admin/export",
  "[16:40:15.229] [REQ] OPTIONS /internal/debug status=204 allowed=GET,POST,TRACE",
  "[16:40:15.512] [FINDING:MED] Verb tampering accepted TRACE in prod scope=global",
  "[16:40:15.936] [REQ] POST /auth/refresh concurrent=40 status_mismatch=7",
  "[16:40:16.297] [FINDING:MED] Session race condition suspected token_reuse=true",
  "[16:40:16.761] [REQ] GET /.git/config status=403 leak=none",
  "[16:40:17.113] [REQ] GET /api/v2/internal/metrics status=200 exposure=public",
  "[16:40:17.444] [FINDING:HIGH] Sensitive telemetry endpoint without auth",
  "[16:40:18.037] [REQ] GET /login?next=https://evil.tld status=302",
  "[16:40:18.380] [FINDING:LOW] Open redirect partial validation bypass",
  "[16:40:18.992] [REQ] GET /graphql introspection=true status=200",
  "[16:40:19.337] [SCAN] Completed phase=recon elapsed=00:04:51 coverage=92.4%",
];

export default function DastScannerDashboard() {
  return (
    <div className="min-h-screen bg-[#000000] px-4 py-5 text-[#d0d0d0] sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-[1500px] flex-col gap-3 font-mono">
        <header className="border border-[#222222] bg-[#0d0d0d] p-3">
          <div className="mb-2 flex items-center justify-between text-[11px] text-[#8b8b8b]">
            <span>DAST CONTROL SURFACE / WEB TARGET ANALYSIS</span>
            <span>PROFILE: aggressive-recon-v4</span>
          </div>
          <div className="grid grid-cols-1 gap-2 lg:grid-cols-[1fr_auto]">
            <input
              defaultValue="https://portal.acme-finance.net/"
              aria-label="Target URL"
              className="h-10 w-full border border-[#333333] bg-[#000000] px-3 text-sm text-[#d8d8d8] outline-none placeholder:text-[#666666] focus:border-[#4a4a4a]"
            />
            <button
              type="button"
              className="h-10 border border-[#333333] bg-[#111111] px-5 text-xs font-semibold tracking-wide text-[#d6d6d6] transition-colors hover:bg-[#181818]"
            >
              RUN_SCAN
            </button>
          </div>
        </header>

        <section className="grid gap-3 xl:grid-cols-[1.35fr_1fr]">
          <div className="border border-[#222222] bg-[#0d0d0d] p-3">
            <div className="mb-3 text-[11px] tracking-wide text-[#8f8f8f]">
              TARGET EXECUTION KPIS
            </div>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {kpis.map((metric) => (
                <article
                  key={metric.label}
                  className="border border-[#262626] bg-[#111111] p-3"
                >
                  <p className="text-[11px] tracking-wide text-[#808080]">{metric.label}</p>
                  <p className="mt-1 text-lg font-semibold text-[#e6e6e6]">{metric.value}</p>
                  <p className="mt-1 text-[11px] text-[#9f9f9f]">{metric.delta}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="border border-[#222222] bg-[#0d0d0d] p-3">
            <div className="mb-3 flex items-center justify-between text-[11px] tracking-wide text-[#8f8f8f]">
              <span>SEVERITY BREAKDOWN</span>
              <span>LAST UPDATE 16:40:19Z</span>
            </div>
            <div className="space-y-2">
              {severitySummary.map((item) => (
                <article
                  key={item.level}
                  className="border border-[#262626] bg-[#111111] p-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {item.level === "CRIT" ? (
                        <ShieldAlert size={14} className="text-[#ff8585]" />
                      ) : item.level === "LOW" ? (
                        <CheckCircle2 size={14} className="text-[#8ad4ab]" />
                      ) : null}
                      <span className="text-sm text-[#d8d8d8]">{item.level}</span>
                    </div>
                    <span
                      className={`inline-flex min-w-10 items-center justify-center border px-2 py-0.5 text-xs ${item.style}`}
                    >
                      {item.count}
                    </span>
                  </div>
                  <p className="mt-2 text-[11px] text-[#a4a4a4]">{item.sample}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border border-[#222222] bg-[#0d0d0d] p-3">
          <div className="mb-2 flex items-center justify-between">
            <h2 className="text-[11px] tracking-wide text-[#8f8f8f]">
              LIVE RECONNAISSANCE LOGS
            </h2>
            <span className="text-[11px] text-[#767676]">STREAM: INTERCEPTOR-01</span>
          </div>
          <div className="h-[360px] overflow-y-auto border border-[#262626] bg-[#000000] p-3 text-xs leading-relaxed">
            {liveLogs.map((entry) => (
              <p key={entry} className="whitespace-pre-wrap text-[#bcbcbc]">
                {entry}
              </p>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
