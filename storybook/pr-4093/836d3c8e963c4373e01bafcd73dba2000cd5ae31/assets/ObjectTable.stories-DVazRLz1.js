import{j as i}from"./iframe-C0-x1FP0.js";import{O as p}from"./object-table-472WP8_C.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DmTb61LJ.js";import"./preload-helper-DCX9k7ir.js";import"./Table-DJMsOaR-.js";import"./index-DV22TdK8.js";import"./Dialog-CbKuY7bP.js";import"./cross-yFQp_D_Z.js";import"./svgIconContainer-BSxvLIZD.js";import"./useBaseUiId-CA7uGIeg.js";import"./InternalBackdrop-brHMeUVe.js";import"./composite-Dy-B8Ijy.js";import"./index-DUQSD1NB.js";import"./index-C7QUHUmQ.js";import"./index-Bo-o19rY.js";import"./useEventCallback-CKs1ld83.js";import"./SkeletonBar-C2MOvv6_.js";import"./LoadingCell-Cb8ccBYd.js";import"./ColumnConfigDialog-Grq4fMuX.js";import"./DraggableList-Q22sHSvj.js";import"./search-Vl3MAPNS.js";import"./Input-BXkRChlq.js";import"./useControlled-Dp-jMyqd.js";import"./Button-CvK_tZY2.js";import"./small-cross-DvHjGkkh.js";import"./ActionButton-DT15JGE9.js";import"./Checkbox-BbkHkxig.js";import"./useValueChanged-ByiOoXtD.js";import"./CollapsiblePanel-0BooQOGv.js";import"./MultiColumnSortDialog-D3MwWUNe.js";import"./MenuTrigger-BL9KlAPW.js";import"./CompositeItem-D0Pwm5JG.js";import"./ToolbarRootContext-DthEPhMn.js";import"./getDisabledMountTransitionStyles-Btbbq1bs.js";import"./getPseudoElementBounds-DzHxX6wm.js";import"./chevron-down-Tbopdf5u.js";import"./index-ai2s7LZ-.js";import"./error-VkCpPEhJ.js";import"./BaseCbacBanner-CIb3UhEC.js";import"./makeExternalStore-C9rMI5OP.js";import"./Tooltip-CA4Uvv6q.js";import"./PopoverPopup-CbjVo92q.js";import"./debounce-BdQw7iZx.js";import"./useOsdkClient-B74sjWML.js";import"./tick-D7IllXvz.js";import"./DropdownField-CN-ggOq5.js";import"./isEqual-enoGD4YI.js";import"./withOsdkMetrics-Dw6CTACt.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
