import{j as r,M as s}from"./iframe-DxXKdltG.js";import{P as p}from"./pdf-viewer-l7MKnrg7.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BiRcROYF.js";import"./preload-helper-DeiUyftX.js";import"./PdfViewer-D_9uIsUN.js";import"./index-BtfwOrEP.js";import"./BasePdfViewer-DYV4rhMx.js";import"./BasePdfViewer.module.css-DpDZYRcv.js";import"./PdfViewerAnnotationLayer-B3JrkW9a.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Dj3plVLj.js";import"./PdfViewerOutlineSidebar-Fe1uMVgs.js";import"./PdfViewerSidebarHeader-B9YlyKaF.js";import"./useBaseUiId-BIU3X4c6.js";import"./useControlled-CaTiOTAf.js";import"./CompositeRoot-CFBJCG-z.js";import"./CompositeItem-Co5br9Tc.js";import"./ToolbarRootContext-Oju08BfH.js";import"./composite-thvm4Qx2.js";import"./svgIconContainer-cbdygDVB.js";import"./PdfViewerSearchBar-DlcY9Myj.js";import"./chevron-up-Bnv6-0Bj.js";import"./chevron-down-vwGCQFp5.js";import"./cross-BuyZb8_W.js";import"./PdfViewerSidebar-2ZqGFzBl.js";import"./index-QYya9p5M.js";import"./index-Zxk0DmkR.js";import"./index-cP62887E.js";import"./PdfViewerToolbar-DJYrLOIT.js";import"./Button-DmXHdCRF.js";import"./chevron-right-DNHoB6Ey.js";import"./Input-B2m11alO.js";import"./search-BGr984X9.js";import"./spin-HanXnNay.js";import"./error-JxDwIdvE.js";import"./withOsdkMetrics-B-_hpiKp.js";import"./makeExternalStore-B1C7zDDl.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
