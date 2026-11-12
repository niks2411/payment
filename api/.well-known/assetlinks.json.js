export default function handler(req, res) {
  const assetLinks = [
    {
      relation: [
        "delegate_permission/common.handle_all_urls",
        "delegate_permission/common.get_login_creds",
      ],
      target: {
        namespace: "android_app",
        package_name: "com.vnetix.shigrampay",
        sha256_cert_fingerprints: [
          "A3:5D:68:5F:AF:A7:1B:92:33:26:62:7E:D2:71:97:DD:4C:BE:FD:19:33:FA:A0:FC:4E:B9:00:BB:5E:B5:5C:4A",
        ],
      },
    },
  ];

  res.setHeader("Content-Type", "application/json");
  res.status(200).json(assetLinks);
}
