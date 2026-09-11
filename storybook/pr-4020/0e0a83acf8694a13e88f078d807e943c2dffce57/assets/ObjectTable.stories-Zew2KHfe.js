import{j as i}from"./iframe-t6gOiOpP.js";import{O as p}from"./object-table-jCj-jdV2.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-B9pdEiN8.js";import"./preload-helper-CV5pzfbJ.js";import"./Table-CHURngd8.js";import"./index-B8f3749n.js";import"./Dialog-DZMmB0a5.js";import"./cross-DD5o22Zb.js";import"./svgIconContainer-B5Lj2eIE.js";import"./useBaseUiId-D0UWHXkS.js";import"./InternalBackdrop--ckurpTO.js";import"./composite-CFO_COst.js";import"./index-DaGdI8vt.js";import"./index-8kYg-C7M.js";import"./index-DxstgvF0.js";import"./useEventCallback-Ch6gIkUP.js";import"./SkeletonBar-CM0U4JXQ.js";import"./LoadingCell-CvILSvAL.js";import"./ColumnConfigDialog-tb2UPRLc.js";import"./DraggableList-Bey6PH__.js";import"./search-DBk5UsI-.js";import"./Input-DFrbhTU8.js";import"./useControlled-BZFiwdLD.js";import"./Button-CSkSEq0A.js";import"./small-cross-6H0sIvkE.js";import"./ActionButton-lPYhjhek.js";import"./Checkbox-BY24afgd.js";import"./useValueChanged-DdQntC3G.js";import"./CollapsiblePanel-Z1wCWvPx.js";import"./MultiColumnSortDialog--6aq8P5b.js";import"./MenuTrigger-BYAoIMpG.js";import"./CompositeItem-BYApWBRb.js";import"./ToolbarRootContext-DZ6RrQxV.js";import"./getDisabledMountTransitionStyles-CvywptPR.js";import"./getPseudoElementBounds-U7mN2tqj.js";import"./chevron-down-DJ9UCW_x.js";import"./index-Dqwb4kGz.js";import"./error-CgIajBJj.js";import"./BaseCbacBanner-CMR0iKug.js";import"./makeExternalStore-Y2a1OF7x.js";import"./Tooltip-C6huUy0h.js";import"./PopoverPopup-C9ka-zpy.js";import"./debounce-7GEDpMki.js";import"./useOsdkClient-lwd_qzlK.js";import"./tick-DyExF_WY.js";import"./DropdownField-BxmxCkTC.js";import"./isEqual-B1tWiUyp.js";import"./withOsdkMetrics-Bdbjb4hh.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
