import{j as i}from"./iframe-DzwZADhG.js";import{O as p}from"./object-table-Dwzpl75F.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C-tfZAC9.js";import"./preload-helper-D4CIUPhb.js";import"./Table-6dLVRPa5.js";import"./index-bPezx-Jx.js";import"./Dialog-Du3oLVzS.js";import"./cross-CyC5zJCO.js";import"./svgIconContainer-BcCLnS_P.js";import"./useBaseUiId-DCeowPEc.js";import"./InternalBackdrop-7GfKZLnu.js";import"./composite-C5aR63In.js";import"./index-C3Zy7bdQ.js";import"./index-60H3em-G.js";import"./index-fs5uzBtp.js";import"./useEventCallback-BgizjaWh.js";import"./SkeletonBar-BqhJV5fe.js";import"./LoadingCell-C3mdCADn.js";import"./ColumnConfigDialog-BImV6QDz.js";import"./DraggableList-CL9k6jCW.js";import"./search-BQh3drJY.js";import"./Input-DGm0m1Rw.js";import"./useControlled-BKgOzc4N.js";import"./Button-C5a400vo.js";import"./small-cross-BntxIJHG.js";import"./ActionButton-C4IuHmgY.js";import"./Checkbox-lesEYiMr.js";import"./useValueChanged-DWY6JLGG.js";import"./CollapsiblePanel-B4Pk77Ax.js";import"./MultiColumnSortDialog-Er-0sFD2.js";import"./MenuTrigger-C-YFBDVp.js";import"./CompositeItem-Cis4rFWY.js";import"./ToolbarRootContext-DiUMk1ef.js";import"./getDisabledMountTransitionStyles-B_8U1y7w.js";import"./getPseudoElementBounds-7YMOYGeg.js";import"./chevron-down-CZ1AUZYm.js";import"./index-D8Hs_QlL.js";import"./error-CM-fSgTg.js";import"./BaseCbacBanner-CI6fVmW5.js";import"./makeExternalStore-BH_h44UZ.js";import"./Tooltip-Dz_U-nPI.js";import"./PopoverPopup-BYq4gPbC.js";import"./debounce-CBG8-OsC.js";import"./useOsdkClient-Bcfw9ABs.js";import"./tick-cw0PuptU.js";import"./DropdownField-thhnnQzj.js";import"./isEqual-BfQd3P5k.js";import"./withOsdkMetrics-BnNJyFKx.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
