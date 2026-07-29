import{j as i}from"./iframe-BTIka0mU.js";import{O as p}from"./object-table-Dn1D4m5-.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-a_qwkpSV.js";import"./preload-helper-px61uG1k.js";import"./Table-_U89uYE2.js";import"./index-BSUZmBMj.js";import"./Dialog-CTd2WPT7.js";import"./cross-Y1xE6j58.js";import"./svgIconContainer-_rcFoVfV.js";import"./useBaseUiId-C1-4UPjr.js";import"./InternalBackdrop-CeFBNfZq.js";import"./composite-_RYTITLD.js";import"./index-DJWApIIr.js";import"./index-BZqP7QHW.js";import"./index-BT9Z6v1L.js";import"./useEventCallback-C71sRmII.js";import"./SkeletonBar-CZabTLyj.js";import"./LoadingCell-Ci9j6m_n.js";import"./ColumnConfigDialog-DBGT53TU.js";import"./DraggableList-aQo2-qEs.js";import"./search-klzOiLLV.js";import"./Input-CHu4cTHa.js";import"./useControlled-CL1DBA2V.js";import"./isEqual--t9zKOFS.js";import"./isObject-CxBV9Ohn.js";import"./Button-C_wYQPHZ.js";import"./ActionButton-DKaLVnbU.js";import"./Checkbox-CgcbYrKi.js";import"./useValueChanged-Bz-meo30.js";import"./CollapsiblePanel-D9Wl1m7m.js";import"./MultiColumnSortDialog-BqVx8qLY.js";import"./MenuTrigger-CFDVbb7D.js";import"./CompositeItem-H6HgtU07.js";import"./ToolbarRootContext-DPmgZ9H3.js";import"./getDisabledMountTransitionStyles-Ba7aUPdV.js";import"./getPseudoElementBounds-ooqE2e_e.js";import"./chevron-down-CYoX06Sv.js";import"./index-Cz1dZR80.js";import"./error-GBqEqKOX.js";import"./BaseCbacBanner-Cx_zyMgv.js";import"./makeExternalStore-1GNwblPW.js";import"./Tooltip-C7QOXrku.js";import"./PopoverPopup-BU_dnZfL.js";import"./toNumber-DMQQ3TFc.js";import"./useOsdkClient-BQFCB37k.js";import"./tick-C8bpK66h.js";import"./DropdownField-P907ZQhX.js";import"./withOsdkMetrics-BCXnSjLq.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
