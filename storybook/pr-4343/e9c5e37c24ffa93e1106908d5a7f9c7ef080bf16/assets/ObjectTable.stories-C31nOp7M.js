import{j as i}from"./iframe-CMiiEF1b.js";import{O as p}from"./object-table-oQWMyJiq.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-uzbyPdza.js";import"./preload-helper-2rscAx0o.js";import"./Table-DXwxQvdR.js";import"./index-DRZQ1ZuZ.js";import"./Dialog-BGwEB59l.js";import"./cross-DmjzAf0-.js";import"./svgIconContainer-DmZ8fHpX.js";import"./useBaseUiId-EgPXNEt2.js";import"./InternalBackdrop-U0kfyJ5Z.js";import"./composite-DqjfxZG9.js";import"./index-goWiuive.js";import"./index-Dtqd3tNX.js";import"./index-vCHhqi_x.js";import"./useEventCallback-e3py3zZO.js";import"./SkeletonBar-D_pLrG8I.js";import"./LoadingCell-DegLzQmp.js";import"./ColumnConfigDialog-B6kG6pez.js";import"./DraggableList-qXLjxEkd.js";import"./search-0aDkREOD.js";import"./Input-B0ji1_35.js";import"./useControlled-CaNRytWe.js";import"./Button-CDnIVBQ_.js";import"./small-cross-DGkNWAjz.js";import"./ActionButton-B5NjKg_P.js";import"./Checkbox-evxW-yIF.js";import"./useValueChanged-hWOBB7lU.js";import"./CollapsiblePanel-DHD1Piul.js";import"./MultiColumnSortDialog-B7lXp9Me.js";import"./MenuTrigger-yrWPKLRn.js";import"./CompositeItem-D4B_FL8U.js";import"./ToolbarRootContext-UxomdOwp.js";import"./getDisabledMountTransitionStyles-MJ90XzR7.js";import"./getPseudoElementBounds-TefPeSXP.js";import"./chevron-down-BtRtOYI2.js";import"./index-DVpvfzZ8.js";import"./error-IdCbvwbX.js";import"./BaseCbacBanner-klveZ2h3.js";import"./makeExternalStore-BeAQwjdH.js";import"./Tooltip-Dg78gXhb.js";import"./PopoverPopup-DAxHwasP.js";import"./debounce-DhU-bxB_.js";import"./useOsdkClient-DkekLomq.js";import"./tick-CPg-6I2-.js";import"./DropdownField-B_Y4KBs-.js";import"./isEqual-DpDCxrI8.js";import"./withOsdkMetrics-BucKtTdS.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
