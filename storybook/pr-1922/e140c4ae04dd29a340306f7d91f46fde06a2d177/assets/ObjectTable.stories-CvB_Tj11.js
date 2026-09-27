import{j as i}from"./iframe-CY0l_yrm.js";import{O as p}from"./object-table-CScaSMmu.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DJPT-Vz1.js";import"./preload-helper-DND0VgR5.js";import"./Table-BDLWhByo.js";import"./index-jD6aOkFv.js";import"./Dialog-CObaXXeO.js";import"./cross-Cx7CV6yi.js";import"./svgIconContainer-CS1jdY6Z.js";import"./useBaseUiId-CnQ31eNT.js";import"./InternalBackdrop-DpYJb7P7.js";import"./composite-CtsMuCZE.js";import"./index-BwcD2Xpb.js";import"./index-CYc2nEZM.js";import"./index-B7EOaFV2.js";import"./useEventCallback-CuUylEqe.js";import"./SkeletonBar-DHnB17DS.js";import"./LoadingCell-lgq4p-2w.js";import"./ColumnConfigDialog-BBVV5egm.js";import"./DraggableList-BSKvp16K.js";import"./search-pW8689hu.js";import"./Input-BSPMw6pL.js";import"./useControlled-C5au6PDu.js";import"./Button-BSjQUjCf.js";import"./small-cross-Lb1xubsF.js";import"./ActionButton-DOh4jQXf.js";import"./Checkbox-DoBGOSNN.js";import"./useValueChanged-DZx2OgZD.js";import"./CollapsiblePanel-qW1X9ES0.js";import"./MultiColumnSortDialog-DzqQq3Hc.js";import"./MenuTrigger-LbHnUghE.js";import"./CompositeItem-CBwjlwAY.js";import"./ToolbarRootContext-CxL7mdgL.js";import"./getDisabledMountTransitionStyles-CP-qJ1MY.js";import"./getPseudoElementBounds-DAo1H6Bx.js";import"./chevron-down-CevA26oJ.js";import"./index-Bc195Ow-.js";import"./error-CvxyrBuz.js";import"./BaseCbacBanner-DM8VXmB6.js";import"./makeExternalStore-DLJSnM06.js";import"./Tooltip-CaHDHcXi.js";import"./PopoverPopup-DVUI0Hkh.js";import"./debounce-BZTVhNsm.js";import"./useOsdkClient-Dpp4RHdN.js";import"./tick-D8A10Ahp.js";import"./DropdownField-BBmL-vGd.js";import"./isEqual-D3W4jYG0.js";import"./withOsdkMetrics-B5SRPOi7.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
