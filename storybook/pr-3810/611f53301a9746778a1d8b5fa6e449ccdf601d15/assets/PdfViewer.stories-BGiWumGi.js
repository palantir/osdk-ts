import{j as r,M as s}from"./iframe-BfpGyLEa.js";import{P as p}from"./pdf-viewer-nbnC7qH4.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-2qg5iDxR.js";import"./preload-helper-B3VqCvDk.js";import"./PdfRenderer-BmJ125wf.js";import"./index-HQRwX0sG.js";import"./PdfViewer-Djxmq4U-.js";import"./PdfViewer.module.css-MVLJkqnY.js";import"./PdfViewerAnnotationLayer-ChxD9dko.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BI_ddV4a.js";import"./PdfViewerOutlineSidebar-B8CF611-.js";import"./PdfViewerSidebarHeader-anzA3V_6.js";import"./useBaseUiId-ByeyJXQZ.js";import"./useControlled-BVUZlzvp.js";import"./CompositeRoot-C9c_vuQM.js";import"./CompositeItem-D07VWMUd.js";import"./ToolbarRootContext-DSTawcBa.js";import"./composite-BgeLt9pq.js";import"./svgIconContainer-DjfkGdUu.js";import"./PdfViewerSearchBar-C7cKXYwA.js";import"./chevron-up-C0gH84Un.js";import"./chevron-down-D80S2cyc.js";import"./cross-On_Sn6mV.js";import"./PdfViewerSidebar-B2uk09jL.js";import"./index-BOHHG715.js";import"./index-CnwcoLiT.js";import"./index-C1hBHqbI.js";import"./PdfViewerToolbar-CD6kbFhh.js";import"./Button-DxBNRoWp.js";import"./chevron-right-o9Js1mZl.js";import"./Input-CzADAXYu.js";import"./search-PEXLOihg.js";import"./spin-35BlKJYV.js";import"./error-_erutXgY.js";import"./withOsdkMetrics-C1uTzjR-.js";import"./makeExternalStore-p4wOuTs-.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

// Access media from an OSDK object's media reference property
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
        code: \`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />\`
      }
    }
  }
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const W=["Default"];export{o as Default,W as __namedExportsOrder,U as default};
