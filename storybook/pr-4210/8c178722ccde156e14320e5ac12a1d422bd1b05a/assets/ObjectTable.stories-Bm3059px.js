import{j as i}from"./iframe-CvUSgiu3.js";import{O as p}from"./object-table-BvJbDI1c.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-wVP4GU6M.js";import"./preload-helper-B0zyaiwI.js";import"./Table-BqGL8juK.js";import"./index-DmcWe2qf.js";import"./Dialog-BHI0eyC8.js";import"./cross-DrZXwXEo.js";import"./svgIconContainer-CTy32Y-c.js";import"./useBaseUiId-DY1Z1crQ.js";import"./InternalBackdrop-BjeXf3nJ.js";import"./composite-2ofaKrdo.js";import"./index-Cn7kZwJh.js";import"./index-40gUd9cg.js";import"./index-CiZrWga3.js";import"./useEventCallback-giAqM-Ga.js";import"./SkeletonBar-Crq6VcI5.js";import"./LoadingCell-ZMp_upZg.js";import"./ColumnConfigDialog-BdgHmIoU.js";import"./DraggableList-CI68k6Xu.js";import"./search-BikN9LqI.js";import"./Input-Dqxb3pxV.js";import"./useControlled-DxVirw8z.js";import"./Button-BbMrXCM7.js";import"./small-cross-brkzixeZ.js";import"./ActionButton-cWvGC5Rr.js";import"./Checkbox-BnT_7Zv0.js";import"./useValueChanged-B7529PCr.js";import"./CollapsiblePanel-DD_1P7Ak.js";import"./MultiColumnSortDialog-seWZwaRj.js";import"./MenuTrigger-hLB_c1Oa.js";import"./CompositeItem-BekmKE9y.js";import"./ToolbarRootContext-BRgMGrEJ.js";import"./getDisabledMountTransitionStyles-YgtPIr1c.js";import"./getPseudoElementBounds-BGaSa-J5.js";import"./chevron-down-BJ7q-Z6f.js";import"./index-CSjUKw3W.js";import"./error-CFT8_0w_.js";import"./BaseCbacBanner-owDcSAdE.js";import"./makeExternalStore-BqQyfi25.js";import"./Tooltip-DpOcBxM1.js";import"./PopoverPopup-CKHxkUKN.js";import"./debounce-C7rA69Kq.js";import"./useOsdkClient-BU6oB7cD.js";import"./tick-DVXui722.js";import"./DropdownField-B3F6gD4V.js";import"./isEqual-B-ebV27u.js";import"./withOsdkMetrics-B2ewH9eG.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
