import{j as r,M as s}from"./iframe-DjY-zq4T.js";import{P as p}from"./pdf-viewer-C3VgCB_v.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Da4UAuOn.js";import"./preload-helper-CSEk-Qtk.js";import"./PdfViewer-D3CEbRb8.js";import"./index-06oOGq9j.js";import"./BasePdfViewer-xYlUTsTk.js";import"./BasePdfViewer.module.css-CAQxkuEb.js";import"./PdfViewerAnnotationLayer-DPReev9l.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B3KVUo2P.js";import"./PdfViewerOutlineSidebar-DO2s5cfn.js";import"./PdfViewerSidebarHeader-DSRWmQNg.js";import"./useBaseUiId-DFp5uyUH.js";import"./useControlled-B48Xem7I.js";import"./CompositeRoot-imtxFA0F.js";import"./CompositeItem-OryclLtR.js";import"./ToolbarRootContext-Ck5kVxm5.js";import"./composite-DCY6uWMU.js";import"./svgIconContainer-CNapEC-k.js";import"./PdfViewerSearchBar-CcnQtP86.js";import"./chevron-up-D2US2pCd.js";import"./chevron-down-KVYlhqEa.js";import"./cross-DERUs9CV.js";import"./PdfViewerSidebar-CRYP8aZK.js";import"./index-DCZf_Vkp.js";import"./index-BMjnIn7f.js";import"./index-DcxaLnPt.js";import"./PdfViewerToolbar-BTTFAR6J.js";import"./Button-DVfilVoY.js";import"./chevron-right-Bi-Ky5vJ.js";import"./Input-C4MHDVmb.js";import"./search-BkyKKFx6.js";import"./spin-BBn1nngA.js";import"./error-g17Ipf4s.js";import"./withOsdkMetrics-CBDxrN4p.js";import"./makeExternalStore-CXgGJpDa.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
