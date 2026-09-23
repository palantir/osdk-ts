import{j as i}from"./iframe-DGt_wNwK.js";import{O as p}from"./object-table-D2rerESU.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CqZ-L1qh.js";import"./preload-helper-DROywWZr.js";import"./Table-B8udSl2J.js";import"./index-DQChOSqq.js";import"./Dialog-DpgjGMr1.js";import"./cross-BGkapFHE.js";import"./svgIconContainer-D7UZVecC.js";import"./useBaseUiId-C69sf6z7.js";import"./InternalBackdrop-BoIr8mGI.js";import"./composite-LkGdti_A.js";import"./index-CvHeI6FX.js";import"./index-D8zmmPkx.js";import"./index-CVfN9RsA.js";import"./useEventCallback-D3k2FKOQ.js";import"./SkeletonBar-ClTE1RAP.js";import"./LoadingCell-Bh0fL1Mb.js";import"./ColumnConfigDialog-BbFEQ6SG.js";import"./DraggableList-Du47BSx-.js";import"./search-DyFNjb5Q.js";import"./Input-TkUYfjKo.js";import"./useControlled-CVm____s.js";import"./Button-BNxQZVJ4.js";import"./small-cross-DUBDtFaA.js";import"./ActionButton-kGYifaIO.js";import"./Checkbox-vbO2X5rh.js";import"./useValueChanged-CYmdB-rd.js";import"./CollapsiblePanel-B53z1qp2.js";import"./MultiColumnSortDialog-DMaupVNk.js";import"./MenuTrigger-C7oPeiO8.js";import"./CompositeItem-CarXUbLm.js";import"./ToolbarRootContext-CszZ8CJF.js";import"./getDisabledMountTransitionStyles-Bp3EcrUB.js";import"./getPseudoElementBounds-DuFjvkkb.js";import"./chevron-down-Dgt5xHaY.js";import"./index-D9K6xCG_.js";import"./error-CIpMfC0e.js";import"./BaseCbacBanner-CK76grfH.js";import"./makeExternalStore-UXCR43hi.js";import"./Tooltip-D200fGQb.js";import"./PopoverPopup-CQEfdNJX.js";import"./debounce-D4ERLSUT.js";import"./useOsdkClient-CsXE7S4d.js";import"./tick-DpVf1RzV.js";import"./DropdownField-BjN9Z-rg.js";import"./isEqual-DyqcFYzI.js";import"./withOsdkMetrics-CDbkSkNJ.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
