import{j as r}from"./iframe-CVz_WeOC.js";import{O as b}from"./object-table-Ch1VePdD.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-W3yp_MC7.js";import{u as g}from"./useOsdkClient-DylnfcpV.js";import"./preload-helper-D0q6PXbw.js";import"./Table-DXgezDNO.js";import"./index-BDflHgEd.js";import"./Dialog-BKUzTIkl.js";import"./cross-C8noeNqn.js";import"./svgIconContainer-D2LVORHL.js";import"./useBaseUiId-tRRlvhxI.js";import"./InternalBackdrop-hiDKfjs3.js";import"./composite-Dj-vL0W9.js";import"./index-DIHi61Zo.js";import"./index-Cd-fS6dr.js";import"./index-BW7Ibqv5.js";import"./useEventCallback-BowLlq6N.js";import"./SkeletonBar-D4YfVhlj.js";import"./LoadingCell-CKoVF5V4.js";import"./ColumnConfigDialog-DAql2Ux-.js";import"./DraggableList-CIcSt22Q.js";import"./search-DCAwdpsl.js";import"./Input-BT5FMPCr.js";import"./useControlled-D3k60qqO.js";import"./Button-DhCGu5I6.js";import"./small-cross-Bl3UDKAT.js";import"./ActionButton-By1jCsLC.js";import"./Checkbox-Bycu1fn1.js";import"./useValueChanged-CH5NOABR.js";import"./CollapsiblePanel-wiPKjvqv.js";import"./MultiColumnSortDialog-CrQt-CJ-.js";import"./MenuTrigger-B5gMglGI.js";import"./CompositeItem-D5028N7a.js";import"./ToolbarRootContext-BUfksNXb.js";import"./getDisabledMountTransitionStyles-CM3FK5cI.js";import"./getPseudoElementBounds-BQgoGGXw.js";import"./chevron-down-D7PojQw9.js";import"./index-BZxaJOaP.js";import"./error-DIsBLczr.js";import"./BaseCbacBanner-gkWm0dQw.js";import"./makeExternalStore-CChDsTbl.js";import"./Tooltip-Bvg92253.js";import"./PopoverPopup-CMdx60IF.js";import"./debounce-l5vaE6ps.js";import"./tick-DKNFoxMi.js";import"./DropdownField-BcK9lDxz.js";import"./isEqual-CrVurfmr.js";import"./withOsdkMetrics-h90fRcpC.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
const client = useOsdkClient();
const employeeObjectSet = client(Employee).where({
  jobProfile: "Marketing Manager",
});
return <ObjectTable objectType={Employee} objectSet={employeeObjectSet} />`}}},render:t=>{const T=g()(i).where({jobProfile:"Marketing Manager"});return r.jsx("div",{className:"object-table-container",style:{height:"600px"},children:r.jsx(b,{...t,objectType:i,objectSet:T})})},play:async({canvasElement:t})=>{const e=d(t);await e.findAllByText("Marketing Manager"),await n(e.getAllByText("Marketing Manager").length).toBeGreaterThan(1),await n(e.queryByText("Content Manager")).not.toBeInTheDocument()}},o={args:{objectType:u},parameters:{docs:{description:{story:"Pass an interface type instead of an object type. The table shows the interface's properties (email, name, employeeNumber) and any object implementing the interface will be displayed."},source:{code:`import { WorkerInterface } from "./types/WorkerInterface";

<ObjectTable objectType={WorkerInterface} />`}}},render:t=>r.jsx("div",{className:"object-table-container",style:{height:"600px"},children:r.jsx(b,{...t})}),play:async({canvasElement:t})=>{const e=d(t);await e.findByText(h),await n(e.getByText("Name")).toBeInTheDocument(),await n(e.getByText("Email")).toBeInTheDocument()}};var c,s,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns
  },
  parameters: {
    docs: {
      source: {
        code: \`
const client = useOsdkClient();
const employeeObjectSet = client(Employee).where({
  jobProfile: "Marketing Manager",
});
return <ObjectTable objectType={Employee} objectSet={employeeObjectSet} />\`
      }
    }
  },
  render: args => {
    const client = useOsdkClient();
    const employeeObjectSet = client(Employee).where({
      jobProfile: "Marketing Manager"
    });
    return <div className="object-table-container" style={{
      height: "600px"
    }}>
        <ObjectTable {...args} objectType={Employee} objectSet={employeeObjectSet} />
      </div>;
  },
  // The object set is filtered to \`jobProfile: "Marketing Manager"\`
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    // Wait for the (MSW-mocked) rows to load.
    await canvas.findAllByText("Marketing Manager");
    await expect(canvas.getAllByText("Marketing Manager").length).toBeGreaterThan(1);
    await expect(canvas.queryByText("Content Manager")).not.toBeInTheDocument();
  }
}`,...(m=(s=a.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};var p,l,y;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    objectType: WorkerInterface as unknown as typeof Employee
  },
  parameters: {
    docs: {
      description: {
        story: "Pass an interface type instead of an object type. The table shows the interface's " + "properties (email, name, employeeNumber) and any object implementing the interface " + "will be displayed."
      },
      source: {
        code: \`import { WorkerInterface } from "./types/WorkerInterface";

<ObjectTable objectType={WorkerInterface} />\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>,
  // The interface exposes name/email/employeeNumber; objects implementing it
  // (Employees) render with those mapped properties (name ← fullName).
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Interface "name" maps to the Employee's fullName.
    await canvas.findByText(TARGET_DATA);

    // The interface's columns are shown by their display names.
    await expect(canvas.getByText("Name")).toBeInTheDocument();
    await expect(canvas.getByText("Email")).toBeInTheDocument();
  }
}`,...(y=(l=o.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const fe=["WithObjectSet","WithInterfaceType"];export{o as WithInterfaceType,a as WithObjectSet,fe as __namedExportsOrder,je as default};
