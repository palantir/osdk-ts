import{j as r,M as s}from"./iframe-fw03FCk5.js";import{P as p}from"./pdf-viewer-CH2cgYGs.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BlPwUemj.js";import"./preload-helper-P9E4Gy6I.js";import"./PdfViewer-DX45pt_D.js";import"./index-cLbCIlyy.js";import"./BasePdfViewer--h3NtCCS.js";import"./BasePdfViewer.module.css-BfCadP5y.js";import"./PdfViewerAnnotationLayer-C3NFmQQF.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-95Gc625l.js";import"./PdfViewerOutlineSidebar-CAvuCz1z.js";import"./PdfViewerSidebarHeader-Ny8w68Wv.js";import"./useBaseUiId-R4A3P2Wz.js";import"./useControlled-Bwl7RhM1.js";import"./CompositeRoot-B_DyJufq.js";import"./CompositeItem-BsCKjv-0.js";import"./ToolbarRootContext-BkWOeIIg.js";import"./composite-D_MYaedS.js";import"./svgIconContainer-DTMIi6B0.js";import"./PdfViewerSearchBar-DfQL912p.js";import"./chevron-up-DTJm_c-W.js";import"./chevron-down-CoqXE8sv.js";import"./cross-Cwm_6W5t.js";import"./PdfViewerSidebar-0BsVAp66.js";import"./index-Br7cHrYo.js";import"./index-DFgmoBbG.js";import"./index-DZcROz4y.js";import"./PdfViewerToolbar-DfcCoeqt.js";import"./Button-B6XGTdgm.js";import"./chevron-right-xZ4MceOL.js";import"./Input-Cr_VCQb2.js";import"./search-6gQRaMIj.js";import"./spin-Df9RzKFK.js";import"./error-Dfv9QpfZ.js";import"./withOsdkMetrics-DxwGMBTH.js";import"./makeExternalStore-Bmm8rP_V.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
