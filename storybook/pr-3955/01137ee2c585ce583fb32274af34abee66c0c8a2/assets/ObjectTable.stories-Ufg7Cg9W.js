import{j as i}from"./iframe-BmXghCn6.js";import{O as p}from"./object-table-D9UpOFZ4.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-ZK-R7fM8.js";import"./preload-helper-DyEb50hU.js";import"./Table-BvFIt6FA.js";import"./index-CkP1S794.js";import"./Dialog-CcntKMNc.js";import"./cross-1G28DJ34.js";import"./svgIconContainer-CEabMecg.js";import"./useBaseUiId-BFdWkSa3.js";import"./InternalBackdrop-Bsr2VYjE.js";import"./composite-skjDbJuY.js";import"./index-XWjp_9x9.js";import"./index-C8vp91fy.js";import"./index-N47VdsYc.js";import"./useEventCallback-9K-ZHZHx.js";import"./SkeletonBar-BTg5UwSJ.js";import"./LoadingCell-BmVyf-pJ.js";import"./ColumnConfigDialog-cwJr_Bnc.js";import"./DraggableList-DToiNID5.js";import"./search-DYe5GpMI.js";import"./Input-D8XP268p.js";import"./useControlled-BKLzfLUK.js";import"./Button-Cs6CA2sl.js";import"./small-cross-CqK4fWdL.js";import"./ActionButton-CYwjsF9h.js";import"./Checkbox-BaarIBkE.js";import"./useValueChanged-DZMD6Hgy.js";import"./CollapsiblePanel-7FaH6Awn.js";import"./MultiColumnSortDialog-WSTGwkQu.js";import"./MenuTrigger-B5AdCMJX.js";import"./CompositeItem-Kpz015F9.js";import"./ToolbarRootContext-Bv4KJP5T.js";import"./getDisabledMountTransitionStyles-jOX9CoCu.js";import"./getPseudoElementBounds-BJaYajaT.js";import"./chevron-down-BKWNxeex.js";import"./index-Bl1gUBDd.js";import"./error-8I9DfYjI.js";import"./BaseCbacBanner-BjBp6vIF.js";import"./makeExternalStore-D8WVbSgH.js";import"./Tooltip-Dsq7FhXV.js";import"./PopoverPopup-MW8o7zfB.js";import"./debounce-3vdrVhMQ.js";import"./useOsdkClient-BSpvxK_2.js";import"./tick-DmjFFyYl.js";import"./DropdownField-BVMUqHL9.js";import"./isEqual-CoPM5EwX.js";import"./withOsdkMetrics-BALE--sz.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
