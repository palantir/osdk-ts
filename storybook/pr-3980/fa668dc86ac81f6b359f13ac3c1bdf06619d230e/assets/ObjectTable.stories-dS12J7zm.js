import{j as i}from"./iframe-BV--DL-R.js";import{O as p}from"./object-table-DQHNYxoz.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-esbzKQoF.js";import"./preload-helper-BfGADaHb.js";import"./Table-7uiN3oSh.js";import"./index-CpBKC5uG.js";import"./Dialog-CebkHvWH.js";import"./cross-D8EsCuc2.js";import"./svgIconContainer-vnkw8afj.js";import"./useBaseUiId-rbddndRR.js";import"./InternalBackdrop-A29j3Jv_.js";import"./composite-CQeJ_a4C.js";import"./index-EXqXv7zU.js";import"./index-B1MBKIV9.js";import"./index-BxGUdqqq.js";import"./useEventCallback-DLQ-P11x.js";import"./SkeletonBar-CQF-UYPc.js";import"./LoadingCell-C4WppctV.js";import"./ColumnConfigDialog-RLeotKr6.js";import"./DraggableList-CqO_EFJB.js";import"./search-BMQtt1GF.js";import"./Input-CryKSl2-.js";import"./useControlled-CdeR330J.js";import"./Button-D-B9BslW.js";import"./small-cross-DRxw8mHr.js";import"./ActionButton-kVCpi8C7.js";import"./Checkbox-BctEX42o.js";import"./useValueChanged-CJeYGrcH.js";import"./CollapsiblePanel-S4FPv7iH.js";import"./MultiColumnSortDialog-BV6SioqH.js";import"./MenuTrigger-DwsQoCvq.js";import"./CompositeItem-CftYIfuS.js";import"./ToolbarRootContext-BKEdcjiV.js";import"./getDisabledMountTransitionStyles-B1E7AbBw.js";import"./getPseudoElementBounds-Bw9teYEa.js";import"./chevron-down-DLz3NkpP.js";import"./index-BG63AOsT.js";import"./error-CX8ETYns.js";import"./BaseCbacBanner-Cc424hnx.js";import"./makeExternalStore-CbX_-WII.js";import"./Tooltip-CVaWVMU1.js";import"./PopoverPopup-Dab1ytdf.js";import"./debounce-yjhqSwaL.js";import"./useOsdkClient-BpiaH7Up.js";import"./tick-BN4lQriL.js";import"./DropdownField-CqJYsTEQ.js";import"./isEqual-Dx0Yr_9W.js";import"./withOsdkMetrics-bx0PT80C.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
