import{j as i}from"./iframe-CQyGqSJ2.js";import{O as p}from"./object-table-BWxi0zmX.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-B_9qR4zf.js";import"./preload-helper-ClClUiX7.js";import"./Table-Yn2naZit.js";import"./index-CTpVcWtj.js";import"./Dialog-CnwYTvBT.js";import"./cross-BWGdF31s.js";import"./svgIconContainer-Bbpye-X7.js";import"./useBaseUiId-B26AdHtG.js";import"./InternalBackdrop-DmLp5Gl4.js";import"./composite-C5TUu6hJ.js";import"./index-BW6-nEus.js";import"./index-D1lXuc4_.js";import"./index-B3kybnc3.js";import"./useEventCallback-CqxfjtdI.js";import"./SkeletonBar-B2QyIJUx.js";import"./LoadingCell-dQ7R5Hpj.js";import"./ColumnConfigDialog-BwS2PpVu.js";import"./DraggableList-f4GxRlGj.js";import"./search-x6pHaO-A.js";import"./Input-CCQVhRPw.js";import"./useControlled-B7OjwH49.js";import"./Button-BVydS5Yy.js";import"./small-cross-nxex0ZkC.js";import"./ActionButton-kDaP1zFI.js";import"./Checkbox-CKrVqXvH.js";import"./useValueChanged-DK0qo_26.js";import"./CollapsiblePanel-BSMYMTBM.js";import"./MultiColumnSortDialog-B18EqFte.js";import"./MenuTrigger-BPYWGQ03.js";import"./CompositeItem-BYWBWUfU.js";import"./ToolbarRootContext-C3_9j6Sh.js";import"./getDisabledMountTransitionStyles-3Vc1pogz.js";import"./getPseudoElementBounds-Cj_uTRK0.js";import"./chevron-down-C10qSii-.js";import"./index-BgtiYt9F.js";import"./error-DJLHZkng.js";import"./BaseCbacBanner-BRSfR0vr.js";import"./makeExternalStore-D5YfmHD0.js";import"./Tooltip-D0ez9myK.js";import"./PopoverPopup-8yoX8IlU.js";import"./debounce-BUg8UsLy.js";import"./useOsdkClient-DCaJw-IL.js";import"./tick-MOe4HZvJ.js";import"./DropdownField-CqsPWfQt.js";import"./isEqual-BmJmFeHQ.js";import"./withOsdkMetrics-LQabL3nD.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
