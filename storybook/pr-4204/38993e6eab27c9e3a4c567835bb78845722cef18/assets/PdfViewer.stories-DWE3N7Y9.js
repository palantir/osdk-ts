import{j as r,M as s}from"./iframe-BPD7a-d3.js";import{P as p}from"./pdf-viewer-ymyxYYyr.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DV6_Pdni.js";import"./preload-helper-BMJg2fth.js";import"./PdfViewer-CKULy6hZ.js";import"./index-DWlOJTtZ.js";import"./BasePdfViewer-BqMN_nHl.js";import"./BasePdfViewer.module.css-Cc8d0T2c.js";import"./PdfViewerAnnotationLayer-CUu0ydNM.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CXNy52vc.js";import"./PdfViewerOutlineSidebar-BOAnxKMJ.js";import"./PdfViewerSidebarHeader-bpa1gGID.js";import"./useBaseUiId-B7NeBfTl.js";import"./useControlled-DcoiTjSg.js";import"./CompositeRoot-BKUcpFOa.js";import"./CompositeItem-CQbGZkro.js";import"./ToolbarRootContext-CvDFIQMo.js";import"./composite-2r4XaYyI.js";import"./svgIconContainer-9WeLc1W4.js";import"./PdfViewerSearchBar-C7gKlCcs.js";import"./chevron-up-BTzeox3B.js";import"./chevron-down-TG9TSSoU.js";import"./cross-BQBN2sBj.js";import"./PdfViewerSidebar-DJ9Dvfpn.js";import"./index-BUYfos0b.js";import"./index-BFdep0Pu.js";import"./index-CPwIgA5j.js";import"./PdfViewerToolbar-CxlEw2XR.js";import"./Button-J8RQxXRy.js";import"./chevron-right-qQX3aKpG.js";import"./Input-BsWtOrbL.js";import"./search-DDY46Bsb.js";import"./spin-BFybIQLR.js";import"./error-DxTVaEkU.js";import"./withOsdkMetrics-zev-jqP5.js";import"./makeExternalStore-BXsO-6Dt.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
