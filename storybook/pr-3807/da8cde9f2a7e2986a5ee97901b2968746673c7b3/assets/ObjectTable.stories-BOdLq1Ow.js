import{j as i}from"./iframe-B8RO62N_.js";import{O as p}from"./object-table-CbgO89ol.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CaFrFF5f.js";import"./preload-helper-DsZdGcRf.js";import"./Table-B3r40lxL.js";import"./index-B9o8TN_g.js";import"./Dialog-D7_0d8_8.js";import"./cross-CcdrUkI0.js";import"./svgIconContainer-IlfBd6hB.js";import"./useBaseUiId-B264urwS.js";import"./InternalBackdrop-yKApGwSP.js";import"./composite-BD3vthMy.js";import"./index-lV5AmHS7.js";import"./index-BvEMXlP9.js";import"./index-BLSJds7S.js";import"./useEventCallback-DVcq19df.js";import"./SkeletonBar-vRd-fnM3.js";import"./LoadingCell-DlXv5aJ7.js";import"./ColumnConfigDialog-mn0Q-S3k.js";import"./DraggableList-CEB-SAwr.js";import"./search-T5RtviOr.js";import"./Input-riFqtKQ3.js";import"./useControlled-Bz4rBUe9.js";import"./isEqual-C4QYwlDG.js";import"./small-cross-BrDhhRIu.js";import"./Button-FowIH9YL.js";import"./ActionButton-DTqBZ6ik.js";import"./Checkbox-CLCbchPT.js";import"./useValueChanged-D5kRxH40.js";import"./CollapsiblePanel-BUa_jE3V.js";import"./MultiColumnSortDialog-C9dSET6x.js";import"./MenuTrigger-C0EkcB63.js";import"./CompositeItem-1sK8GXCR.js";import"./ToolbarRootContext-DHATwrwM.js";import"./getDisabledMountTransitionStyles-Dib2YDpa.js";import"./getPseudoElementBounds-BlxI1kmV.js";import"./chevron-down-BuLKigFK.js";import"./index-CNxWP85l.js";import"./error-CHWCyOLY.js";import"./BaseCbacBanner-LJOrVojz.js";import"./makeExternalStore-ComoOgEU.js";import"./Tooltip-K_Qxl82p.js";import"./PopoverPopup-B3WIFAst.js";import"./Combobox-z1zMG8qL.js";import"./useOsdkClient-D-sqsQvp.js";import"./tick-CRkG4WWb.js";import"./DropdownField-C4GPEJr2.js";import"./withOsdkMetrics-VStPp8O8.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
