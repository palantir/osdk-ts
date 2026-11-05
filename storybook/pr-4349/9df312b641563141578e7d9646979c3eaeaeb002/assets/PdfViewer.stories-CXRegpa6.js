import{j as r,M as s}from"./iframe-BqTu4XiU.js";import{P as p}from"./pdf-viewer-CRAgUwVq.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-zAuNWPas.js";import"./preload-helper-CLwPNuFm.js";import"./PdfViewer-DjWweEU0.js";import"./index-n4P62ULA.js";import"./BasePdfViewer-Djsjay1G.js";import"./BasePdfViewer.module.css-DUQlBQUh.js";import"./PdfViewerAnnotationLayer-BzGhdlV-.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DUA03f54.js";import"./PdfViewerOutlineSidebar-qU2Ktqyi.js";import"./PdfViewerSidebarHeader-79bDgm-5.js";import"./useBaseUiId-DOa2ktQ_.js";import"./useControlled-BTMI3vML.js";import"./CompositeRoot-BMVN0e69.js";import"./CompositeItem-2LiZgC-6.js";import"./ToolbarRootContext-I9KV8qho.js";import"./composite-Uju8Gyxg.js";import"./svgIconContainer-ssNd1Mel.js";import"./PdfViewerSearchBar-Q2eldwSy.js";import"./chevron-up-CRQKPQXv.js";import"./chevron-down-BzSkZyB8.js";import"./cross-Bf-ZTIWt.js";import"./PdfViewerSidebar-QxfnzTCL.js";import"./index-B8t3MqHb.js";import"./index-DPw1J95l.js";import"./index-XmYkAd4i.js";import"./PdfViewerToolbar-AVI43zNK.js";import"./Button-B0Jsn_TB.js";import"./chevron-right-yd4vTytn.js";import"./Input-CyJM7H_A.js";import"./search-CGymVd3o.js";import"./spin-DwpuYz5v.js";import"./error-gQVPInMQ.js";import"./withOsdkMetrics-BmTAUVUD.js";import"./makeExternalStore-CD6czKDm.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
