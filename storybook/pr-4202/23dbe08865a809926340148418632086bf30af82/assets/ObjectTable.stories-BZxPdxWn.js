import{j as i}from"./iframe-S84xAba9.js";import{O as p}from"./object-table-D7dqDn5I.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DG9ygSi3.js";import"./preload-helper-DJNCezcd.js";import"./Table-BLwbniGI.js";import"./index-8j0T478k.js";import"./Dialog-H7IS3eOk.js";import"./cross-D931JdRi.js";import"./svgIconContainer-BlYa3pTV.js";import"./useBaseUiId-YpbERV6F.js";import"./InternalBackdrop-BIkzYyEP.js";import"./composite-BPZV-Yhr.js";import"./index-DUM3Z7TI.js";import"./index-DafAAkcf.js";import"./index-Wol--mzF.js";import"./useEventCallback-CvUbQ2M2.js";import"./SkeletonBar-T2RkLi5-.js";import"./LoadingCell-CQbw9zdB.js";import"./ColumnConfigDialog-DpxbPXfs.js";import"./DraggableList-CgdQnFi4.js";import"./search-DhFsI6Pf.js";import"./Input-Cif3XMX5.js";import"./useControlled-BfYdfQhZ.js";import"./Button-BASBXCLw.js";import"./small-cross-ClUWXpO2.js";import"./ActionButton-CWjWbtqS.js";import"./Checkbox-DevWlODG.js";import"./useValueChanged-Dr5883-C.js";import"./CollapsiblePanel-CxmwbUpy.js";import"./MultiColumnSortDialog-DVuF13K8.js";import"./MenuTrigger-DCnDZv66.js";import"./CompositeItem-D1oKuNmK.js";import"./ToolbarRootContext-Dx--qbfa.js";import"./getDisabledMountTransitionStyles-BSS3-xui.js";import"./getPseudoElementBounds-B4-e1zAI.js";import"./chevron-down-B21hEOy9.js";import"./index-7bPdWCKR.js";import"./error-CTVY3lwb.js";import"./BaseCbacBanner-CfO_PDbj.js";import"./makeExternalStore-CaEUyt0v.js";import"./Tooltip-C6MYNiME.js";import"./PopoverPopup-DT5g8jR4.js";import"./debounce-CR__6nn4.js";import"./useOsdkClient-CZfvkz-K.js";import"./tick-CGcvAYvI.js";import"./DropdownField-BpqWh6Kr.js";import"./isEqual-iyEPvtnE.js";import"./withOsdkMetrics-3ZtUgCqV.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
