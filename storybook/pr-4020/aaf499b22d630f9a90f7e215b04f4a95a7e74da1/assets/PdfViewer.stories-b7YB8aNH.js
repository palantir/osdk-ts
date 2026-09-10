import{j as r,M as s}from"./iframe-CpcWMsh2.js";import{P as p}from"./pdf-viewer-CrebgU8m.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-vfKwSpIo.js";import"./preload-helper-CN3GQMjz.js";import"./PdfViewer-B_Rz0CnX.js";import"./index-Crz8jB-9.js";import"./BasePdfViewer-SLWXT-C9.js";import"./BasePdfViewer.module.css-iUUJT5-L.js";import"./PdfViewerAnnotationLayer-Dc9VoHgf.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-By5V5iQT.js";import"./PdfViewerOutlineSidebar-CLWKYemt.js";import"./PdfViewerSidebarHeader-Bc7mNLfc.js";import"./useBaseUiId-DXzATXKT.js";import"./useControlled-nerw9-6R.js";import"./CompositeRoot-9Gx1ntls.js";import"./CompositeItem-Bm31Wr9o.js";import"./ToolbarRootContext-nw5M_EUa.js";import"./composite-CtH7isvm.js";import"./svgIconContainer-Huh63JJu.js";import"./PdfViewerSearchBar-C6ySXB_9.js";import"./chevron-up-Ctp0z2FB.js";import"./chevron-down-ByJuuwk-.js";import"./cross-BGaRJcvO.js";import"./PdfViewerSidebar-C0GwaDCF.js";import"./index-BbnSTWOo.js";import"./index-BBtYj7J3.js";import"./index-doObrpzR.js";import"./PdfViewerToolbar-CnekX4Pw.js";import"./Button-CUMMFBAM.js";import"./chevron-right-BmYsvrnU.js";import"./Input-BdQWVtdR.js";import"./search-BprxbqFd.js";import"./spin-D4PO8CQY.js";import"./error-Cea5AChJ.js";import"./withOsdkMetrics-CnzpNQ91.js";import"./makeExternalStore-6VRmQlrr.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
