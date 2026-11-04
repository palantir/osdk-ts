import{j as i}from"./iframe-B8HV8iQM.js";import{O as p}from"./object-table-BmDs5ypl.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BlwsrSYW.js";import"./preload-helper-BJL_29SE.js";import"./Table-CN6tDEys.js";import"./index-DfArBtGw.js";import"./Dialog-CtwmlsVl.js";import"./cross-BUomV37k.js";import"./svgIconContainer-CSeiJgb1.js";import"./useBaseUiId-DIsSmRfw.js";import"./InternalBackdrop-D8Lv6NUu.js";import"./composite-Csop57qo.js";import"./index-6KHmLmfs.js";import"./index-UkSWMlbC.js";import"./index-BdGJVPhn.js";import"./useEventCallback-C4vCOB3Y.js";import"./SkeletonBar-IYKBkIS2.js";import"./LoadingCell-Ba-FKL6d.js";import"./ColumnConfigDialog-C9QzF-Qy.js";import"./DraggableList-BHV1EGi1.js";import"./search-NJ19wZoC.js";import"./Input-BDX0t5YK.js";import"./useControlled-Bmw28nji.js";import"./Button-C9_cOvqp.js";import"./small-cross-DIXE5x7P.js";import"./ActionButton-Be-vXg2-.js";import"./Checkbox-CvkNDLi6.js";import"./useValueChanged-B-_ytn6c.js";import"./CollapsiblePanel-SrwTh7HR.js";import"./MultiColumnSortDialog-BCwk3CPa.js";import"./MenuTrigger-BC9qF4S9.js";import"./CompositeItem-B4-eeroY.js";import"./ToolbarRootContext-CMP0qHsY.js";import"./getDisabledMountTransitionStyles-C_SsSajC.js";import"./getPseudoElementBounds-tj4TkaA0.js";import"./chevron-down-InHxZIxd.js";import"./index-BtUOZ1zx.js";import"./error-B8hDXUgK.js";import"./BaseCbacBanner-BQo3W4ga.js";import"./makeExternalStore-D-MiCBSb.js";import"./Tooltip-BdCeYLjB.js";import"./PopoverPopup-BOpxhme4.js";import"./debounce-3SAgyzFW.js";import"./useOsdkClient-D7UMSCqS.js";import"./tick-CnJDPiGK.js";import"./DropdownField-CHI-_Y2P.js";import"./isEqual-7IXkhA4A.js";import"./withOsdkMetrics-Qp2i-feo.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
