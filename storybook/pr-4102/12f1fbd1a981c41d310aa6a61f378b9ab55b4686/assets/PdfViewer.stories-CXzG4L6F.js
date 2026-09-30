import{j as r,M as s}from"./iframe-mIKFVahX.js";import{P as p}from"./pdf-viewer-BYsmA6Qd.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D-84E-rX.js";import"./preload-helper-DQmtxJ1O.js";import"./PdfViewer-BwFPodzQ.js";import"./index-eiO_d1ck.js";import"./BasePdfViewer-B7GsuLrq.js";import"./BasePdfViewer.module.css-ig0uFB9W.js";import"./PdfViewerAnnotationLayer-DmKVlvzE.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B_--MY-H.js";import"./PdfViewerOutlineSidebar-CCnA0owF.js";import"./PdfViewerSidebarHeader-CLJCBmXL.js";import"./useBaseUiId-CgEi7PVt.js";import"./useControlled-XyEjnDFJ.js";import"./CompositeRoot-Ch7lFv2f.js";import"./CompositeItem-CiILW6_Z.js";import"./ToolbarRootContext-xG4QpLCn.js";import"./composite-D6bfVeDu.js";import"./svgIconContainer-CQHualxO.js";import"./PdfViewerSearchBar-DzsXaRCY.js";import"./chevron-up-BIMYUXIf.js";import"./chevron-down-BpXaL00s.js";import"./cross-UeuWwKaz.js";import"./PdfViewerSidebar-Bol2Qm9D.js";import"./index-ug1vsAFu.js";import"./index-Dr8o4W-0.js";import"./index-CRsq_c05.js";import"./PdfViewerToolbar-Bt7Rjbi0.js";import"./Button-D5NXSYW3.js";import"./chevron-right-C5Q57e0C.js";import"./Input-C9PDTVtY.js";import"./search-BUcn5JQ5.js";import"./spin-RRdRk79g.js";import"./error-Jm4hVuYR.js";import"./withOsdkMetrics-f8AFQ5tL.js";import"./makeExternalStore-BtEilyBA.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
