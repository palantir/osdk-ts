import{j as r,M as s}from"./iframe-BAYjgPn_.js";import{P as p}from"./pdf-viewer-Ckqw5fuj.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BDG5YJzs.js";import"./preload-helper-BJCl-bRv.js";import"./PdfViewer-BiTidd6y.js";import"./index-DN0zke96.js";import"./BasePdfViewer-CBPApW7i.js";import"./BasePdfViewer.module.css-s5KOyWCs.js";import"./PdfViewerAnnotationLayer-BvDBXyWg.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CY6GEtjA.js";import"./PdfViewerOutlineSidebar-C4fG-kS_.js";import"./PdfViewerSidebarHeader-Dd5cF1_B.js";import"./useBaseUiId-Btxh7Hdv.js";import"./useControlled-SaIcnxAb.js";import"./CompositeRoot-Bekme_zB.js";import"./CompositeItem-C-2rS0Vr.js";import"./ToolbarRootContext-Vpkb3Bpo.js";import"./composite-CSv2xCWn.js";import"./svgIconContainer-Bdz9mcrS.js";import"./PdfViewerSearchBar-CwjkJ12u.js";import"./chevron-up-CBc2hrOb.js";import"./chevron-down-B1sc9iOG.js";import"./cross-BXQxs_UM.js";import"./PdfViewerSidebar-BM4Iif6t.js";import"./index-B-spnNIp.js";import"./index-BCKNZ_-u.js";import"./index-ewU9n-Bp.js";import"./PdfViewerToolbar-CxbVOTsz.js";import"./Button-Zo--VZAt.js";import"./chevron-right-DvAUrV-3.js";import"./Input-1Y2R_X8G.js";import"./search-iSsdT6KZ.js";import"./spin-AZeuTzH5.js";import"./error-DapfmyD2.js";import"./withOsdkMetrics-DE_nej2a.js";import"./makeExternalStore-CGIpAmlW.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
