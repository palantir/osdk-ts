import{j as r,M as s}from"./iframe-DtbzkEzs.js";import{P as p}from"./pdf-viewer-BU6C9AnA.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CDqFB2FL.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfViewer-BntrdtUt.js";import"./index-Cdl7LtxY.js";import"./BasePdfViewer-B757Fp80.js";import"./BasePdfViewer.module.css-BLnAkzmx.js";import"./PdfViewerAnnotationLayer-OuBmmU7j.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BEVhOZcm.js";import"./PdfViewerOutlineSidebar-DNeuYZxV.js";import"./PdfViewerSidebarHeader-_zKJMla2.js";import"./useBaseUiId-D9GVHSAs.js";import"./useControlled-D6veSbC8.js";import"./CompositeRoot-DrBct6LY.js";import"./CompositeItem-CrrqQtnx.js";import"./ToolbarRootContext-jyIYtAkE.js";import"./composite-BCd6_VbD.js";import"./svgIconContainer-B1X0MJ2V.js";import"./PdfViewerSearchBar-BlKluqGF.js";import"./chevron-up-BPZ85aOK.js";import"./chevron-down-BkbtkYMp.js";import"./cross-CkY96ER9.js";import"./PdfViewerSidebar-FolywG59.js";import"./index-CvbQmAxO.js";import"./index-CAGi0i5x.js";import"./index-BuXzcc8v.js";import"./PdfViewerToolbar-Kpt1bEcj.js";import"./Button-wQYjXV7W.js";import"./chevron-right-cNpc-KQL.js";import"./Input-CLvZmI34.js";import"./search-tpVGv-bq.js";import"./spin-CNUT-_I6.js";import"./error-DdI77Vqv.js";import"./withOsdkMetrics-Ad1iX_N9.js";import"./makeExternalStore-BZkRjIzK.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
