import{j as i}from"./iframe-civNld3i.js";import{O as p}from"./object-table-BkNygl9T.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DMyclJQo.js";import"./preload-helper-DGob3pd3.js";import"./Table-D3QmnDSd.js";import"./index-Bkk9aIG7.js";import"./Dialog-Veq-I3ha.js";import"./cross-Bl6bAFo8.js";import"./svgIconContainer-Cbt7mtvH.js";import"./useBaseUiId-DfebwqrC.js";import"./InternalBackdrop-BDeg4tmF.js";import"./composite-C8tN05lQ.js";import"./index-BcfoxrgG.js";import"./index-C2RAlQU3.js";import"./index-BU14isbu.js";import"./useEventCallback-BbngQcPL.js";import"./SkeletonBar-ePOHNcXa.js";import"./LoadingCell-DBRxFXJW.js";import"./ColumnConfigDialog-B23L06qv.js";import"./DraggableList-Byy1kqEA.js";import"./search-ulrdH098.js";import"./Input-CzHf5EpN.js";import"./useControlled-DSRlTv1D.js";import"./Button-_66b78aL.js";import"./small-cross-DpA5lC9j.js";import"./ActionButton-D27VwrOt.js";import"./Checkbox-ONjswOP3.js";import"./useValueChanged-BjzJCsWw.js";import"./CollapsiblePanel--7f6zkon.js";import"./MultiColumnSortDialog-DB-aGVTk.js";import"./MenuTrigger-DsBkVnjM.js";import"./CompositeItem-CyFsxOTP.js";import"./ToolbarRootContext-CpIc7UTm.js";import"./getDisabledMountTransitionStyles-CoXeXbxe.js";import"./getPseudoElementBounds-BeYCQidE.js";import"./chevron-down-Cc8MdjVP.js";import"./index-Bz_nIjTo.js";import"./error-9MfXm3EE.js";import"./BaseCbacBanner-RPuZIvbI.js";import"./makeExternalStore-2tdSo-BF.js";import"./Tooltip-BBz15K44.js";import"./PopoverPopup-mFug3adh.js";import"./debounce-_kg4QHxF.js";import"./useOsdkClient-CDLe6B2D.js";import"./tick-wP3FdKpg.js";import"./DropdownField-C-J6dPze.js";import"./isEqual-CzH2I0wQ.js";import"./withOsdkMetrics-VkQ2PjHN.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
