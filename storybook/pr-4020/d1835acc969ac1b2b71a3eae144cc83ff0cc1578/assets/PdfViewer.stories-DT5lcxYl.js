import{j as r,M as s}from"./iframe-KzcVBCRi.js";import{P as p}from"./pdf-viewer-CyHo9O17.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Cqd2YDN1.js";import"./preload-helper-BHEHcaci.js";import"./PdfViewer-Fisx-4xa.js";import"./index-CzXxEHHr.js";import"./BasePdfViewer-CpcSYDyX.js";import"./BasePdfViewer.module.css-D0awq4Eh.js";import"./PdfViewerAnnotationLayer-BVN_jU9p.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-hBpwPZv3.js";import"./PdfViewerOutlineSidebar-BR4NwBI6.js";import"./PdfViewerSidebarHeader-9ICHTx5j.js";import"./useBaseUiId-DZF9dUKs.js";import"./useControlled-uli5q6ql.js";import"./CompositeRoot-B2eR39UF.js";import"./CompositeItem-BzuuDXx0.js";import"./ToolbarRootContext-BWXPXzbU.js";import"./composite-5RWCdSN2.js";import"./svgIconContainer-59d154vN.js";import"./PdfViewerSearchBar-CU9vCkxJ.js";import"./chevron-up-BpQ4LsbP.js";import"./chevron-down-DpGps272.js";import"./cross-C3McpADX.js";import"./PdfViewerSidebar-nKjAGog3.js";import"./index-BCuz_Fvw.js";import"./index-k64aStbd.js";import"./index-2DqsNDep.js";import"./PdfViewerToolbar-C8C6_8-B.js";import"./Button-CBd10Xxd.js";import"./chevron-right-BT9LOvyw.js";import"./Input-Cd7kdMt2.js";import"./search-CflGQf1d.js";import"./spin-BSFQ3NrJ.js";import"./error-BAN-C5Cp.js";import"./withOsdkMetrics-DIAhwg3C.js";import"./makeExternalStore-DCqqAOa1.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
