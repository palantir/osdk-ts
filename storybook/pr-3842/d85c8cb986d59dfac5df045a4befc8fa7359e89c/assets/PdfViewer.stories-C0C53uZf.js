import{j as r,M as s}from"./iframe-C1aZz4qh.js";import{P as p}from"./pdf-viewer-DCzcmGVK.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CHhV0BVD.js";import"./preload-helper-C57PRwQB.js";import"./PdfRenderer-B2lqNHVU.js";import"./index-DndOh7uw.js";import"./PdfViewer-BP0F8guQ.js";import"./PdfViewer.module.css-CETq7XII.js";import"./PdfViewerAnnotationLayer-BNR_kyv6.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DoC4RHyZ.js";import"./PdfViewerOutlineSidebar-B1j8QTZZ.js";import"./PdfViewerSidebarHeader-CKFasUs-.js";import"./useBaseUiId-DHP81qHW.js";import"./useControlled-CCEarqoz.js";import"./CompositeRoot-CxPFXn1n.js";import"./CompositeItem-DLnehaEy.js";import"./ToolbarRootContext-BNN0c4jp.js";import"./composite-CB1pt23S.js";import"./svgIconContainer-B5UnyqeH.js";import"./PdfViewerSearchBar-D0LydVIp.js";import"./chevron-up-Db2Odlhm.js";import"./chevron-down-dh3VxrDb.js";import"./cross-qtsLbSBi.js";import"./PdfViewerSidebar-VZVnZO67.js";import"./index-NP9LypFz.js";import"./index-CSr6rIRF.js";import"./index-DwSUGGBW.js";import"./PdfViewerToolbar-CpmW-ctA.js";import"./Button-BgiX1sCn.js";import"./chevron-right-9fbQPiE-.js";import"./Input-CkMB4S7R.js";import"./search-yR82rB65.js";import"./spin-BFknDlem.js";import"./error-BXuTAgqJ.js";import"./withOsdkMetrics-C0HDOzXR.js";import"./makeExternalStore-tkOquhkD.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
