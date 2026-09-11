import{j as r,M as s}from"./iframe-4W_gqfri.js";import{P as p}from"./pdf-viewer-OazATlo_.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-deBo06Dz.js";import"./preload-helper-iH2eX15p.js";import"./PdfViewer-BXMfLbDT.js";import"./index-BE7X2I8k.js";import"./BasePdfViewer-fcZU2U0e.js";import"./BasePdfViewer.module.css-DF-KNAdO.js";import"./PdfViewerAnnotationLayer-DIKFOvGf.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BrhIXGgy.js";import"./PdfViewerOutlineSidebar-Dbs2YqRz.js";import"./PdfViewerSidebarHeader-DZ9cJbY8.js";import"./useBaseUiId-CkmLLk3_.js";import"./useControlled-BKLbSuyG.js";import"./CompositeRoot-DNJqPmS_.js";import"./CompositeItem-BflBgmdx.js";import"./ToolbarRootContext-DldxC3FJ.js";import"./composite-iwN2p37r.js";import"./svgIconContainer-DXl_IpNa.js";import"./PdfViewerSearchBar-DNgVB3GH.js";import"./chevron-up-9l4d2ngN.js";import"./chevron-down-DAwV2NNc.js";import"./cross-DPXC28es.js";import"./PdfViewerSidebar-BxKYbJAB.js";import"./index-OuSfth0Z.js";import"./index-DIt5uu1h.js";import"./index-Xj4teAhO.js";import"./PdfViewerToolbar-CIJIKKCe.js";import"./Button-DmhydU5X.js";import"./chevron-right-CNLNzJMC.js";import"./Input-BayiWgWk.js";import"./search-BfzYHGGv.js";import"./spin-Bu0NDFIF.js";import"./error-DvgnJEpu.js";import"./withOsdkMetrics-CNNLqNUF.js";import"./makeExternalStore-DcNKv6Lc.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
