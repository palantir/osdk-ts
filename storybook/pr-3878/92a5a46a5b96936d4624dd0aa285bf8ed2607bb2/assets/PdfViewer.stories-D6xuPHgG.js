import{j as r,M as s}from"./iframe-vUigHa_R.js";import{P as p}from"./pdf-viewer-Cl-ViI0S.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CvXmSpdP.js";import"./preload-helper-y4UwMW9A.js";import"./PdfViewer-C1cvhm0c.js";import"./index-D23DfkwD.js";import"./BasePdfViewer-CBH85G6M.js";import"./BasePdfViewer.module.css-BqedyQRI.js";import"./PdfViewerAnnotationLayer-Ck7SdE5u.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-a6XOQ0iV.js";import"./PdfViewerOutlineSidebar-CdyL2NRV.js";import"./PdfViewerSidebarHeader-CuO8zRyN.js";import"./useBaseUiId-B_Xr74Hh.js";import"./useControlled-7ZCh4KeY.js";import"./CompositeRoot-l33f_5gZ.js";import"./CompositeItem-N7hxfDs2.js";import"./ToolbarRootContext-hmB3Z2ti.js";import"./composite-B5_hjWtY.js";import"./svgIconContainer-B9kPsCJD.js";import"./PdfViewerSearchBar-CirCRhjz.js";import"./chevron-up-BbfmOwRp.js";import"./chevron-down-Dk583wTX.js";import"./cross-4LijBnZ1.js";import"./PdfViewerSidebar-jKorD5eK.js";import"./index-adjP72nR.js";import"./index-M84BU-nW.js";import"./index-Bhvq4vDE.js";import"./PdfViewerToolbar-C3QBevo5.js";import"./Button-B9LxW1HS.js";import"./chevron-right-BxqHvSsJ.js";import"./Input-Ca0Q4NVt.js";import"./search-Du0pQ6pL.js";import"./spin-jiTEDkk8.js";import"./error-DkxPnmmW.js";import"./withOsdkMetrics-DO0ZWj9H.js";import"./makeExternalStore-DzBHK_Wg.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
