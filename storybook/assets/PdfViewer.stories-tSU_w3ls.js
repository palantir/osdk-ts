import{j as r,M as s}from"./iframe-zzdLRRkP.js";import{P as p}from"./pdf-viewer-H-ixltmd.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CkZjdZMw.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfRenderer-Clmi_c-Y.js";import"./index-D834FBro.js";import"./PdfViewer-BULM3wcf.js";import"./PdfViewer.module.css-D63_m_-t.js";import"./PdfViewerAnnotationLayer-DaPNMSyD.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DudG2_bv.js";import"./PdfViewerOutlineSidebar-CgZIZW3i.js";import"./PdfViewerSidebarHeader-u0YnORgZ.js";import"./useBaseUiId-CtmDVctP.js";import"./useControlled-7B1FZy-i.js";import"./CompositeRoot-Dpc-cpi-.js";import"./CompositeItem-D0JUxwMy.js";import"./ToolbarRootContext-COFb6wXq.js";import"./composite-Bpyg1XgY.js";import"./svgIconContainer-Dj084qxv.js";import"./PdfViewerSearchBar-DEADwlCw.js";import"./chevron-up-CSUfDHmF.js";import"./chevron-down-DAiMDPPn.js";import"./cross-vN4VZOfj.js";import"./PdfViewerSidebar-DbKhht5-.js";import"./index-CAKjNa2w.js";import"./index-BtoPQHyd.js";import"./index-Cs6OfdLi.js";import"./PdfViewerToolbar-D5IUMIbC.js";import"./Button-CcJGTlv_.js";import"./chevron-right-C8HHLMKj.js";import"./Input-C0n4iBu6.js";import"./search-DCKy7lD2.js";import"./spin-CAU5Q0AF.js";import"./error-CkMO6fn3.js";import"./withOsdkMetrics-DfG4PBxp.js";import"./makeExternalStore-CR1iUPPm.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
