import{j as i}from"./iframe-Bg0i_UAO.js";import{O as p}from"./object-table-CAxIaCCb.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-B4HYtWJ2.js";import"./preload-helper-bomzM5Jo.js";import"./Table-CGrH-X0a.js";import"./index-iuNvYGUj.js";import"./Dialog-TKFKzbdM.js";import"./cross-DYXULJqv.js";import"./svgIconContainer-458A5wVg.js";import"./useBaseUiId-Dy2tLJKh.js";import"./InternalBackdrop-CVk0rAPJ.js";import"./composite-DU2hn-v2.js";import"./index-BNlKleF-.js";import"./index-DmhiGDhn.js";import"./index-Ce8RK2-k.js";import"./useEventCallback-DQN4LN3R.js";import"./SkeletonBar-C9Q9W8wl.js";import"./LoadingCell-CEhAQo9k.js";import"./ColumnConfigDialog-CJ9aQ0gr.js";import"./DraggableList-D5_UR4g5.js";import"./search-FIM5R_Xb.js";import"./Input-DGqcQ9G-.js";import"./useControlled-BYTWKxAR.js";import"./Button-BG7UnPBU.js";import"./small-cross-CCjOzjzK.js";import"./ActionButton-DnfLk4MD.js";import"./Checkbox-eD26ecQs.js";import"./useValueChanged-B-bZoMqO.js";import"./CollapsiblePanel-CQh_sS0z.js";import"./MultiColumnSortDialog-CnlpFVmC.js";import"./MenuTrigger-D1u63OZL.js";import"./CompositeItem-DcA0lzjF.js";import"./ToolbarRootContext-BrU5VQqZ.js";import"./getDisabledMountTransitionStyles-DmbZ1RCY.js";import"./getPseudoElementBounds-HKqm4JQP.js";import"./chevron-down-WqwXZksn.js";import"./index-DdfZaivF.js";import"./error-DVM1iMsf.js";import"./BaseCbacBanner-DVJrTKK6.js";import"./makeExternalStore-DXmjaos-.js";import"./Tooltip-De8rcIwq.js";import"./PopoverPopup-BF-Javiq.js";import"./debounce-BL-pXwMa.js";import"./useOsdkClient-r7ETv_l7.js";import"./tick-CXF_8gMW.js";import"./DropdownField-DD3uTne1.js";import"./isEqual-CUS3cLoh.js";import"./withOsdkMetrics-CcEO5U0p.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
