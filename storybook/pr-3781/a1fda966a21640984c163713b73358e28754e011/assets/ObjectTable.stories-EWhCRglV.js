import{j as i}from"./iframe-k4q2yqwB.js";import{O as p}from"./object-table-xGpMlGKU.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CgqdxBgR.js";import"./preload-helper-CcFy7ru6.js";import"./Table-03CJ2Lmf.js";import"./index-BoJiE0EV.js";import"./Dialog-CzrEPziC.js";import"./cross-BSjrA-hj.js";import"./svgIconContainer-G2Q9WiIr.js";import"./useBaseUiId-C7Hv9Tzg.js";import"./InternalBackdrop-Bedpf4wz.js";import"./composite-Bm-k795N.js";import"./index-fgdVt0KH.js";import"./index-Dm0Rhw7E.js";import"./index-DTDof-5f.js";import"./useEventCallback-C4okygGr.js";import"./SkeletonBar-BVq-S6Xh.js";import"./LoadingCell-DxCMomGt.js";import"./ColumnConfigDialog-DcArbVLT.js";import"./DraggableList-B1tKyGQF.js";import"./search-29u5dNu1.js";import"./Input-D1rCohyt.js";import"./useControlled-BecCn6K2.js";import"./isEqual-D3vlfOdi.js";import"./isObject-DxbMLdSm.js";import"./Button-CnDoyZ08.js";import"./ActionButton-DgpuixvG.js";import"./Checkbox-CBj1kWmC.js";import"./useValueChanged-D9uwznF8.js";import"./CollapsiblePanel-ast8KaP2.js";import"./MultiColumnSortDialog-CnVLAtFv.js";import"./MenuTrigger-B_BymQfJ.js";import"./CompositeItem-ChG7XBVE.js";import"./ToolbarRootContext-B_DA6t17.js";import"./getDisabledMountTransitionStyles-C0VioAFY.js";import"./getPseudoElementBounds-CZTlLMfI.js";import"./chevron-down-pLPxEt1n.js";import"./index-C9wyccr-.js";import"./error-ClYvRrnM.js";import"./BaseCbacBanner-CUkl0cUl.js";import"./makeExternalStore-Ck9Fwx-s.js";import"./Tooltip-DPsMBPb2.js";import"./PopoverPopup-CJmDmZQd.js";import"./toNumber-BzJ6VRWW.js";import"./useOsdkClient-M5DD-G7T.js";import"./tick-khb2_2lM.js";import"./DropdownField-DDquJplV.js";import"./withOsdkMetrics-qyQgOFT1.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns
  },
  parameters: {
    docs: {
      description: {
        story: "Minimal setup showing Employee data with default column definitions."
      },
      source: {
        code: \`<ObjectTable objectType={Employee} />\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>,
  // Loads data, then opens a column header menu to confirm the default,
  // out-of-the-box header features are all present.
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Wait for the (MSW-mocked) rows to load.
    await canvas.findByText(TARGET_DATA);
    await openHeaderMenu(canvas, "fullName");
    await expect(await screen.findByRole("menuitem", {
      name: "Sort ascending"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Sort descending"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Pin column"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Configure Columns"
    })).toBeInTheDocument();

    // Dismiss the menu so the story is left in a clean state.
    await userEvent.keyboard("{Escape}");
  }
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const de=["Default"];export{n as Default,de as __namedExportsOrder,ue as default};
