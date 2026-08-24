import{j as r,M as s}from"./iframe-8W7VgjHd.js";import{P as p}from"./pdf-viewer-6sIKNr6s.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CYTreAEU.js";import"./preload-helper-DO6s7Vfv.js";import"./PdfViewer-DvP4GuGT.js";import"./index-BtBCXImO.js";import"./BasePdfViewer-BWP2pCt5.js";import"./BasePdfViewer.module.css-ZcNPCS-o.js";import"./PdfViewerAnnotationLayer-TRDtf4eE.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-apOoCb25.js";import"./PdfViewerOutlineSidebar-CqVuewMY.js";import"./PdfViewerSidebarHeader-BUq7w7Wn.js";import"./useBaseUiId-CAeqz6cK.js";import"./useControlled-DJ7vg7ze.js";import"./CompositeRoot-uuAndeho.js";import"./CompositeItem-DdqixRyh.js";import"./ToolbarRootContext-BF4G0Oc0.js";import"./composite-C4cfnDPy.js";import"./svgIconContainer-BTT_9wFe.js";import"./PdfViewerSearchBar-BTAr9Yd8.js";import"./chevron-up-uERxtfnV.js";import"./chevron-down-Bz7OwIBQ.js";import"./cross-6cERZ-YR.js";import"./PdfViewerSidebar-BVJR-MZl.js";import"./index-DmJmV5u2.js";import"./index-BOk8n-3F.js";import"./index-DLLXsNTc.js";import"./PdfViewerToolbar-CsMOzPDj.js";import"./Button-DqbeFPJh.js";import"./chevron-right-CJ623LmH.js";import"./Input-C92p9Vvp.js";import"./search-Xd_WCU0c.js";import"./spin-CPYkCKJo.js";import"./error-BHd5K9Qe.js";import"./withOsdkMetrics-pAxDRnd3.js";import"./makeExternalStore-DqBKfbO3.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
