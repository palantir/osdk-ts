import{j as r,M as s}from"./iframe-C51H6UNa.js";import{P as p}from"./pdf-viewer-BXTruDMF.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-urfTAbmj.js";import"./preload-helper-DPRquFXQ.js";import"./PdfViewer-C9q3rUwW.js";import"./index-XgCK3bCN.js";import"./BasePdfViewer-Dg3dX16Z.js";import"./BasePdfViewer.module.css-DI7iJO7O.js";import"./PdfViewerAnnotationLayer-aVVHBIQr.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B45kjYcy.js";import"./PdfViewerOutlineSidebar-CaltViyt.js";import"./PdfViewerSidebarHeader-DRfOe0K_.js";import"./useBaseUiId-BO3VYUv8.js";import"./useControlled-CDSAxchT.js";import"./CompositeRoot-DIqE-wXB.js";import"./CompositeItem-B83sK6r-.js";import"./ToolbarRootContext-Dquj6J6i.js";import"./composite-BT7MKZYR.js";import"./svgIconContainer-BcKhCUV6.js";import"./PdfViewerSearchBar-DBWeQXh3.js";import"./chevron-up-ZftVvxdh.js";import"./chevron-down-CiXp0wUf.js";import"./cross-Da8aR7tr.js";import"./PdfViewerSidebar-D1SFkk-e.js";import"./index-BbCxoF0B.js";import"./index-DJOOHoWw.js";import"./index-Cf0yVo51.js";import"./PdfViewerToolbar-CpD8tdaK.js";import"./Button-BbdKgphf.js";import"./chevron-right-CoYzzrVe.js";import"./Input-578UpJoR.js";import"./search-CUjniAIx.js";import"./spin-B7o0w3ry.js";import"./error-BabcdKAa.js";import"./withOsdkMetrics-55ZGkUds.js";import"./makeExternalStore-DINTZeIb.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />`}}}};var t,m,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => {
    const {
      object: employee,
      isLoading
    } = useOsdkObject(Employee, MEDIA_EMPLOYEE_PK);
    if (isLoading || !employee?.employeeDocuments) {
      return <div style={{
        height: "600px"
      }}>Loading OSDK media…</div>;
    }
    return <div style={{
      height: "600px"
    }}>
        <PdfViewer media={employee.employeeDocuments} />
      </div>;
  },
  parameters: {
    docs: {
      source: {
        code: \`// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />\`
      }
    }
  }
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const W=["Default"];export{o as Default,W as __namedExportsOrder,U as default};
