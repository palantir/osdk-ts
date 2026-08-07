import{j as i}from"./iframe-CPz4EE4b.js";import{O as p}from"./object-table-Bpb6cItY.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Bze1xKla.js";import"./preload-helper-BF9ZU9L2.js";import"./Table-DWzIvv-t.js";import"./index-DPQnz2kY.js";import"./Dialog-DC1UFKx2.js";import"./cross-B6wcH7NV.js";import"./svgIconContainer-DvQDx7ps.js";import"./useBaseUiId-DA8N-Cu-.js";import"./InternalBackdrop-e3bdAVp_.js";import"./composite-DC2iaAhD.js";import"./index-YkFTybZ5.js";import"./index-CJDK8JNQ.js";import"./index-B58hFV_H.js";import"./useEventCallback-B7Q5VopY.js";import"./SkeletonBar-C5i76X_E.js";import"./LoadingCell-M2C2qZG3.js";import"./ColumnConfigDialog-Byl7XMyX.js";import"./DraggableList-CD4BIzfT.js";import"./search-CXWbO0Ru.js";import"./Input-BPvVCqJh.js";import"./useControlled-CcD5XhNi.js";import"./isEqual-Bcuklsmv.js";import"./isObject-BYf5ICrk.js";import"./Button-C0KwGN38.js";import"./ActionButton-uEQ50Sca.js";import"./Checkbox-DUfZ5CUi.js";import"./useValueChanged-DRK6-_yq.js";import"./CollapsiblePanel-CYdZ8nbz.js";import"./MultiColumnSortDialog-VpgOvgtI.js";import"./MenuTrigger-DGvICw92.js";import"./CompositeItem-DCP0DZpD.js";import"./ToolbarRootContext-BXV7NB_D.js";import"./getDisabledMountTransitionStyles-DVGMUieh.js";import"./getPseudoElementBounds-D8m_aFdX.js";import"./chevron-down-BgJNP9vx.js";import"./index-8dkGhFzU.js";import"./error-CgKzZzah.js";import"./BaseCbacBanner-BAvvwpCO.js";import"./makeExternalStore-CPJA5Zb3.js";import"./Tooltip-CiRczL5H.js";import"./PopoverPopup-BMq3Yh3-.js";import"./toNumber-CkzBscM2.js";import"./useOsdkClient-4vxdzy5u.js";import"./tick-BagwPZ-4.js";import"./DropdownField-B0L3JmJr.js";import"./withOsdkMetrics-CPx-A9BJ.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
