import{j as i}from"./iframe-BJcI6I7N.js";import{O as p}from"./object-table-BFK3o9VN.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Dy3gCuaD.js";import"./preload-helper-t8YjvYIO.js";import"./Table-COi2UZK5.js";import"./index-ciSMf65j.js";import"./Dialog-qZDZtUTL.js";import"./cross-BXeyHaO7.js";import"./svgIconContainer-ChDR1isz.js";import"./useBaseUiId-DEblu5yn.js";import"./InternalBackdrop-zWlD-uj6.js";import"./composite-idv80Jfn.js";import"./index-2EHDOsjj.js";import"./index-CwTnZiyW.js";import"./index-C7gjBbhW.js";import"./useEventCallback-D2AFx3Tw.js";import"./SkeletonBar-Bb1sSD9X.js";import"./LoadingCell-CMKDwxYN.js";import"./ColumnConfigDialog-BYMbCCuR.js";import"./DraggableList-DalDAJj1.js";import"./search-c-uEdInI.js";import"./Input-kyBh5Wk4.js";import"./useControlled-CouybXNc.js";import"./Button-0eHUW9F4.js";import"./small-cross-p3VCPLe0.js";import"./ActionButton-ClWqSrJc.js";import"./Checkbox-BsUCCShW.js";import"./useValueChanged-C92q1_Gi.js";import"./CollapsiblePanel-C_sKcFRB.js";import"./MultiColumnSortDialog-F7srt2ws.js";import"./MenuTrigger-BlR6vsHK.js";import"./CompositeItem-DBn217Rb.js";import"./ToolbarRootContext-Dl2ojvsq.js";import"./getDisabledMountTransitionStyles-CufsIM65.js";import"./getPseudoElementBounds-B6bLm4lL.js";import"./chevron-down-BrRIIpof.js";import"./index-CRh5r80N.js";import"./error-llhgzFId.js";import"./BaseCbacBanner-D2kp_nW7.js";import"./makeExternalStore-DeicAe6-.js";import"./Tooltip-Dl2lUrm5.js";import"./PopoverPopup-CgNtTmRS.js";import"./debounce-wJHHfadf.js";import"./useOsdkClient-Jr33iov8.js";import"./tick-BazIxijd.js";import"./DropdownField-kCDd1U-6.js";import"./isEqual-CAWOzucC.js";import"./withOsdkMetrics-Da2pPJDy.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
