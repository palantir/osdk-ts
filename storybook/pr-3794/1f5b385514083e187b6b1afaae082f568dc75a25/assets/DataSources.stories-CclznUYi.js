import{j as r}from"./iframe-HIMvOqvp.js";import{O as b}from"./object-table-D-WNchmf.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-N_G7DbG-.js";import{u as g}from"./useOsdkClient-CxXIQTjd.js";import"./preload-helper-CEnOtJNC.js";import"./Table-DedP8waU.js";import"./index-BR1U-F-z.js";import"./Dialog-hMfZrTLx.js";import"./cross-CP4Lwknm.js";import"./svgIconContainer-D1UbEXN0.js";import"./useBaseUiId-CktUDHnZ.js";import"./InternalBackdrop-Dp8-zUCW.js";import"./composite-B18nZLbz.js";import"./index-q5lLjySj.js";import"./index-u6B6c4lm.js";import"./index-EPrc8SCg.js";import"./useEventCallback-DUOVZOFF.js";import"./SkeletonBar-BuEvimm7.js";import"./LoadingCell-CyCzRKtl.js";import"./ColumnConfigDialog-DgDt7beG.js";import"./DraggableList-BgEOUXK-.js";import"./search-BMnX-ou2.js";import"./Input-8GhwsC7r.js";import"./useControlled-BEIkGatI.js";import"./isEqual-DDn24rvx.js";import"./isObject-CWP39A5-.js";import"./Button-B-j85khL.js";import"./ActionButton-tMOref2G.js";import"./Checkbox-B_2ZiK-d.js";import"./useValueChanged-B-SGOTcO.js";import"./CollapsiblePanel-DFw3qCxp.js";import"./MultiColumnSortDialog-BnW2raxD.js";import"./MenuTrigger-Bbr9eKQr.js";import"./CompositeItem-_EU9HVH1.js";import"./ToolbarRootContext-CV8VtjXF.js";import"./getDisabledMountTransitionStyles-CxpC5Tat.js";import"./getPseudoElementBounds-DMIne3Mm.js";import"./chevron-down-BSoyp3dk.js";import"./index-VIT7olFA.js";import"./error-D_5Pa8ED.js";import"./BaseCbacBanner-DOuZWpnY.js";import"./makeExternalStore-BNFQB0ek.js";import"./Tooltip-BzrgJjB9.js";import"./PopoverPopup-CRg247ib.js";import"./toNumber-COT5YTsh.js";import"./tick-_LERK7Z8.js";import"./DropdownField-CyTwiJSz.js";import"./withOsdkMetrics-BHF9odaV.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
