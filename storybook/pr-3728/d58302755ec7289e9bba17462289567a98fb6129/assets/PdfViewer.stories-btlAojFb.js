import{j as r,M as s}from"./iframe-DJ3TGWQb.js";import{P as p}from"./pdf-viewer-CcP-Wnsc.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B975Fsqc.js";import"./preload-helper-BU83upYw.js";import"./PdfRenderer-czPVdnn3.js";import"./index-D9ONpsPS.js";import"./PdfViewer-BforIS7W.js";import"./PdfViewer.module.css-dUybWgk7.js";import"./PdfViewerAnnotationLayer-Df3Ot92S.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BLsP_8oL.js";import"./PdfViewerOutlineSidebar-CEA3GXML.js";import"./PdfViewerSidebarHeader-GW5kmDl2.js";import"./useBaseUiId-DwsC2bmK.js";import"./useControlled-Ca6ic55i.js";import"./CompositeRoot-BFR7M1IA.js";import"./CompositeItem-BcncBx6K.js";import"./ToolbarRootContext-C3QngCj9.js";import"./composite-D8A6hiAh.js";import"./svgIconContainer-Cc1PjpjS.js";import"./PdfViewerSearchBar-DfR1hUkg.js";import"./chevron-up-D2JUrWs6.js";import"./chevron-down-A7DMZ8ch.js";import"./cross-Cs83IqU-.js";import"./PdfViewerSidebar-ByNIGPde.js";import"./index-Dq7sbfDU.js";import"./index-Dm4q3qgD.js";import"./index-BKNWNeBp.js";import"./PdfViewerToolbar-Bjdk34Lb.js";import"./Button-BNwxk59k.js";import"./chevron-right-BGUNFk17.js";import"./Input-Cq7wf3mo.js";import"./search-B_-2qGNb.js";import"./spin-DTK1ZtJ1.js";import"./error-40X5yncK.js";import"./withOsdkMetrics-cXiF9TRs.js";import"./makeExternalStore-CHR1Ir4C.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
