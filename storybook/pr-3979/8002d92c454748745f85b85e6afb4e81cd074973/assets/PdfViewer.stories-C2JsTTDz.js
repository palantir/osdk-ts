import{j as r,M as s}from"./iframe-Ba48eLUQ.js";import{P as p}from"./pdf-viewer-CgZaYd97.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C3cvXVHN.js";import"./preload-helper-BcQJohn9.js";import"./PdfViewer-CXY6CGir.js";import"./index-Biav_Ly4.js";import"./BasePdfViewer-CF49o_5B.js";import"./BasePdfViewer.module.css-JABsFHPv.js";import"./PdfViewerAnnotationLayer-BpIGgKs3.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-ivCpGV_4.js";import"./PdfViewerOutlineSidebar-BT-ACsiY.js";import"./PdfViewerSidebarHeader-kovSxmz_.js";import"./useBaseUiId-BqKeDKog.js";import"./useControlled-Ci9ghEUN.js";import"./CompositeRoot-Dz7XVg-w.js";import"./CompositeItem-vF0jzrVV.js";import"./ToolbarRootContext-yUsbv0N5.js";import"./composite--55ShNCx.js";import"./svgIconContainer-Dsy6R3Hn.js";import"./PdfViewerSearchBar-DKsP3wnD.js";import"./chevron-up-oFC622XZ.js";import"./chevron-down-Dcg5i-52.js";import"./cross-CZ3u7Zqk.js";import"./PdfViewerSidebar-C4q2TjFc.js";import"./index-D7LGUR6n.js";import"./index-mue2Ao73.js";import"./index-D49E4xW3.js";import"./PdfViewerToolbar-DI9giwoS.js";import"./Button-DS_jYoZ2.js";import"./chevron-right-DMVk3QS3.js";import"./Input-J_HicyGE.js";import"./search-6WIx7b7M.js";import"./spin-BuCUKevU.js";import"./error-BM0l7F7K.js";import"./withOsdkMetrics-Cul3xOyv.js";import"./makeExternalStore-CTyMzwZg.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
