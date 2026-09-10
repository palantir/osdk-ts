import{j as i}from"./iframe-DfRsO-W_.js";import{O as p}from"./object-table-CP9JoLqJ.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CKS91Bsu.js";import"./preload-helper-B1nnBqyx.js";import"./Table-x1N0vMog.js";import"./index-CQkS0c9h.js";import"./Dialog-CQuuouNU.js";import"./cross-CBNkzS8W.js";import"./svgIconContainer-DgyEbBbg.js";import"./useBaseUiId-t6nqxOAa.js";import"./InternalBackdrop-DexqjegU.js";import"./composite-BNASiMUs.js";import"./index-0fIzBmZ6.js";import"./index-COUiLxiP.js";import"./index-DAMwa_zH.js";import"./useEventCallback-B9H6hou4.js";import"./SkeletonBar-C4TEZaxd.js";import"./LoadingCell-jyJlJ8rZ.js";import"./ColumnConfigDialog-DuyPqMVs.js";import"./DraggableList-da0sxfAo.js";import"./search-DnesuR3u.js";import"./Input-BeFyt6Zg.js";import"./useControlled-DwMJ2aka.js";import"./Button-PGajkELE.js";import"./small-cross-BD6x5MXv.js";import"./ActionButton-DjurcGej.js";import"./Checkbox-L7hCldyi.js";import"./useValueChanged-CQ6Yx7cq.js";import"./CollapsiblePanel-DUX-GqzR.js";import"./MultiColumnSortDialog-fqDZVUuC.js";import"./MenuTrigger-DdmOX4vv.js";import"./CompositeItem-C6hDdpH4.js";import"./ToolbarRootContext-BRXAevlR.js";import"./getDisabledMountTransitionStyles-B2AXI69J.js";import"./getPseudoElementBounds-Ck1GK_Vt.js";import"./chevron-down-Cdf065g5.js";import"./index-DkHZL3b5.js";import"./error-3c9XVh4b.js";import"./BaseCbacBanner-CwLmqWu7.js";import"./makeExternalStore-C23Jsp2C.js";import"./Tooltip-1SCODkG_.js";import"./PopoverPopup-De149wyZ.js";import"./debounce-BAkgb8RS.js";import"./useOsdkClient-Da6wTJ7N.js";import"./tick-CjE9NPay.js";import"./DropdownField-CgS_exM3.js";import"./isEqual-BnnGO8J7.js";import"./withOsdkMetrics-D1y4-r1W.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
