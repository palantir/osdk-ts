import{j as i}from"./iframe-CAlFL39P.js";import{O as p}from"./object-table-UQy4RF9D.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CiBdnZOJ.js";import"./preload-helper-Di8UnZgY.js";import"./Table-DsU3_Ge1.js";import"./index-Btel0vm8.js";import"./Dialog-CrbdkfzJ.js";import"./cross-C-7oEPIv.js";import"./svgIconContainer-B3bjsS48.js";import"./useBaseUiId-DZP7PN-D.js";import"./InternalBackdrop-CJFWdMDJ.js";import"./composite-Do6HvbOs.js";import"./index-CFlCfQcw.js";import"./index-BkqKFdv7.js";import"./index-vkk_5yOj.js";import"./useEventCallback-DuUtYSXt.js";import"./SkeletonBar-D07kBYWy.js";import"./LoadingCell-Btiev75L.js";import"./ColumnConfigDialog-D9yGeKRs.js";import"./DraggableList-pJ6FsEp7.js";import"./search-B49Txj1R.js";import"./Input-BBwNdl2L.js";import"./useControlled-CagAHQp0.js";import"./Button-C360afnZ.js";import"./small-cross-BLQbHCb6.js";import"./ActionButton-DjRyKh7y.js";import"./Checkbox-B2NUrj_g.js";import"./useValueChanged-BMf8iwn2.js";import"./CollapsiblePanel-EQ6Qu2qu.js";import"./MultiColumnSortDialog-6JpRNIIu.js";import"./MenuTrigger-BMrrXs9Q.js";import"./CompositeItem-BD07_lL8.js";import"./ToolbarRootContext-NYYVBOfJ.js";import"./getDisabledMountTransitionStyles-C65SjH8s.js";import"./getPseudoElementBounds-DAJFGzrR.js";import"./chevron-down-C4L1Vt1n.js";import"./index-DlRk9Ig6.js";import"./error-DNzjg8ag.js";import"./BaseCbacBanner-BozJzFUC.js";import"./makeExternalStore-H3EygE5L.js";import"./Tooltip-DivaijH4.js";import"./PopoverPopup-CDqtgdJD.js";import"./debounce-sXHlCwpy.js";import"./useOsdkClient-BWqfO9Ex.js";import"./tick-C2A5bpz7.js";import"./DropdownField-DbH7bzp-.js";import"./isEqual-UK523JPQ.js";import"./withOsdkMetrics-D_LiGSK5.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
