import{j as r,M as s}from"./iframe-B5Ajdn-Z.js";import{P as p}from"./pdf-viewer-yet_fBCi.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B4FV9bZJ.js";import"./preload-helper-B5yP3JPh.js";import"./PdfViewer-QJKaVsAp.js";import"./index-DILEzbbv.js";import"./BasePdfViewer-BHq2Un1G.js";import"./BasePdfViewer.module.css-CULLtCIG.js";import"./PdfViewerAnnotationLayer-Dc1R7Rhe.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-FcsCx3AP.js";import"./PdfViewerOutlineSidebar-Db4t24Az.js";import"./PdfViewerSidebarHeader-CQcXAL6-.js";import"./useBaseUiId-C1Uihcd0.js";import"./useControlled-UxmqIdoS.js";import"./CompositeRoot-CHqdcnrC.js";import"./CompositeItem-CVzNQNnm.js";import"./ToolbarRootContext-BWtD2D4r.js";import"./composite-CnqlIWYg.js";import"./svgIconContainer-DoY_K777.js";import"./PdfViewerSearchBar-DrlgDr4O.js";import"./chevron-up-Bo63fypX.js";import"./chevron-down-BAJRL46i.js";import"./cross-BBK4wgqQ.js";import"./PdfViewerSidebar-DCMgSM5C.js";import"./index-xivGH17H.js";import"./index-DVmTRqee.js";import"./index-0i5GjvBZ.js";import"./PdfViewerToolbar-B6rE4UNz.js";import"./Button-CF8mdfVJ.js";import"./chevron-right-BR2smy_u.js";import"./Input-BBXfcLrJ.js";import"./search-BuV2lV03.js";import"./spin-CUgbvzUa.js";import"./error-DVp4qBBx.js";import"./withOsdkMetrics-Bk1GhbZz.js";import"./makeExternalStore-2_jyxYjq.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
