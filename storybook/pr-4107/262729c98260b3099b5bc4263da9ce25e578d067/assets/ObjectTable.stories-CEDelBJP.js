import{j as i}from"./iframe-CXrJqDi7.js";import{O as p}from"./object-table-Cd3STzG6.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DriWFLf1.js";import"./preload-helper-jkRaFgLU.js";import"./Table-BhBhFKEz.js";import"./index-CIjDsdU0.js";import"./Dialog-B9epiWv4.js";import"./cross-BukSyOKz.js";import"./svgIconContainer-BzSV1llx.js";import"./useBaseUiId-DRTWV3IQ.js";import"./InternalBackdrop-ZhhoRitJ.js";import"./composite-BIMYEycB.js";import"./index-rAYh6pbi.js";import"./index-CUgOIZQ8.js";import"./index-DCDlBCaZ.js";import"./useEventCallback-JwHO2nyR.js";import"./SkeletonBar-BwxqUkGA.js";import"./LoadingCell-0V77jspv.js";import"./ColumnConfigDialog-D1Ji2zsY.js";import"./DraggableList-CYP5Vy9D.js";import"./search-Dyn6N2H3.js";import"./Input-CvxpQ6Xp.js";import"./useControlled-BrDZ81ve.js";import"./Button-BnGcPvMs.js";import"./small-cross-FSbZyUiS.js";import"./ActionButton-C9HLEbBL.js";import"./Checkbox-DWj--UOb.js";import"./useValueChanged-5Z86VqGU.js";import"./CollapsiblePanel-BopoqNCU.js";import"./MultiColumnSortDialog-rx6YdH4_.js";import"./MenuTrigger-De9J9ONv.js";import"./CompositeItem-CyZPBPBK.js";import"./ToolbarRootContext-Dha7jpb4.js";import"./getDisabledMountTransitionStyles-D6coONqb.js";import"./getPseudoElementBounds-BFV0DdWn.js";import"./chevron-down-vVCEooOb.js";import"./index-WbZsn1IX.js";import"./error-bx5NADv9.js";import"./BaseCbacBanner-B-0TwJ_2.js";import"./makeExternalStore-Bxt_lPGm.js";import"./Tooltip-DdLaENUl.js";import"./PopoverPopup-DE4OVcAD.js";import"./debounce-DfSTdNM2.js";import"./useOsdkClient-DBydK2k_.js";import"./tick-BKMBX6oh.js";import"./DropdownField-Be1p7WjB.js";import"./isEqual-CVznVMsb.js";import"./withOsdkMetrics-Dl4aNlWl.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
