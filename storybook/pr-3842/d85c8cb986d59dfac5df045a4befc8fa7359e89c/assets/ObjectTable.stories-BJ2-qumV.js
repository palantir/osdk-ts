import{j as i}from"./iframe-C1aZz4qh.js";import{O as p}from"./object-table-Da3ELJ35.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-B-Zz0xAl.js";import"./preload-helper-C57PRwQB.js";import"./Table-BwAq-AXt.js";import"./index-DndOh7uw.js";import"./Dialog-D0XUZvVd.js";import"./cross-qtsLbSBi.js";import"./svgIconContainer-B5UnyqeH.js";import"./useBaseUiId-DHP81qHW.js";import"./InternalBackdrop-8CzUigsn.js";import"./composite-CB1pt23S.js";import"./index-CSr6rIRF.js";import"./index-DwSUGGBW.js";import"./index-DhK7zook.js";import"./useEventCallback-u7Ubimgc.js";import"./SkeletonBar-DM3YtxCs.js";import"./LoadingCell-DfLkqqvz.js";import"./ColumnConfigDialog-iroc8zmb.js";import"./DraggableList-Dc-s-PBU.js";import"./search-yR82rB65.js";import"./Input-CkMB4S7R.js";import"./useControlled-CCEarqoz.js";import"./isEqual-CY_FtRlU.js";import"./isObject-Dd13mV1N.js";import"./Button-BgiX1sCn.js";import"./ActionButton-FEh_tB9Y.js";import"./Checkbox-Cb2TG0KZ.js";import"./useValueChanged-CIbB9b-p.js";import"./CollapsiblePanel-P01aIOd1.js";import"./MultiColumnSortDialog-DbWxPT_p.js";import"./MenuTrigger-BJS7IWlK.js";import"./CompositeItem-DLnehaEy.js";import"./ToolbarRootContext-BNN0c4jp.js";import"./getDisabledMountTransitionStyles-BmzXB9Ho.js";import"./getPseudoElementBounds-DuZUZl-y.js";import"./chevron-down-dh3VxrDb.js";import"./index-NP9LypFz.js";import"./error-BXuTAgqJ.js";import"./BaseCbacBanner-DpgVfwhv.js";import"./makeExternalStore-tkOquhkD.js";import"./Tooltip-CCcmI9_z.js";import"./PopoverPopup-DpukjGTT.js";import"./toNumber-DoftAu1J.js";import"./useOsdkClient-7X5NmjyA.js";import"./tick-RCuoZqaK.js";import"./DropdownField-jqAfXglE.js";import"./withOsdkMetrics-C0HDOzXR.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
