import{j as i}from"./iframe-B7GyHcsF.js";import{O as p}from"./object-table-DPd-aWI_.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CeCVqglP.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-Bk1GMrYB.js";import"./index-CFQjkptn.js";import"./Dialog-CYxMX5KP.js";import"./cross-CbX11T1l.js";import"./svgIconContainer-DV6JsgR9.js";import"./useBaseUiId-DIKh32OU.js";import"./InternalBackdrop-dYAJysja.js";import"./composite-ZKnDJfr2.js";import"./index-CCC1KVPP.js";import"./index-BrNFn6FK.js";import"./index-CIkJKp5f.js";import"./useEventCallback-Dws1eW-l.js";import"./SkeletonBar-x8unuJhM.js";import"./LoadingCell-vDLd6n3U.js";import"./ColumnConfigDialog-CtOQy-z4.js";import"./DraggableList-BDxPGWV9.js";import"./search-BOqk2K5z.js";import"./Input-xO4VjGaV.js";import"./useControlled-CYQSl254.js";import"./Button-DcySZcut.js";import"./small-cross-C2Z9hnxs.js";import"./ActionButton-C8h86V18.js";import"./Checkbox-DqE-JteW.js";import"./useValueChanged-VqPWwgfd.js";import"./CollapsiblePanel-VqzXipcy.js";import"./MultiColumnSortDialog-CltP5yZp.js";import"./MenuTrigger-BLTWopKx.js";import"./CompositeItem-QnuG7jjG.js";import"./ToolbarRootContext-DPmvBz2H.js";import"./getDisabledMountTransitionStyles-DJHtY_2a.js";import"./getPseudoElementBounds-fr9V4EVn.js";import"./chevron-down-BWTVBIyh.js";import"./index-CV0k5xhB.js";import"./error-o8PSnfAD.js";import"./BaseCbacBanner-BGYGDjdi.js";import"./makeExternalStore-CHXnPqRT.js";import"./Tooltip-Ob1GddwU.js";import"./PopoverPopup-B5kfz1KF.js";import"./debounce-CcrQke-P.js";import"./useOsdkClient-BzlDplSL.js";import"./tick-BsrTYy8c.js";import"./DropdownField-2GtibBCE.js";import"./isEqual-CFHS8Jx5.js";import"./withOsdkMetrics-3hzxFyTR.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
