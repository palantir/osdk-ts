import{j as i}from"./iframe-BYyS3cG-.js";import{O as p}from"./object-table-BdAQglbf.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CU7D85MR.js";import"./preload-helper-BXbEnpda.js";import"./Table-DdldgeZT.js";import"./index-BXxvc4Z_.js";import"./Dialog-DSUrjl3E.js";import"./cross-K2cagqs8.js";import"./svgIconContainer-Dk59z4vq.js";import"./useBaseUiId-CGKSvxjI.js";import"./InternalBackdrop-80Nj_94O.js";import"./composite-ZjlJlMFO.js";import"./index-D2gKK-6z.js";import"./index-DvCEvxA7.js";import"./index-2l1FSn_M.js";import"./useEventCallback-CVm-QX4M.js";import"./SkeletonBar-BaIiRjVZ.js";import"./LoadingCell-DnoRe_V7.js";import"./ColumnConfigDialog-DbGm1Quk.js";import"./DraggableList-DPCdR4Np.js";import"./search-Can7HIrw.js";import"./Input-C27Z_igv.js";import"./useControlled-Br7xWf3M.js";import"./Button-DO8jDkqh.js";import"./small-cross-j0KzCO-W.js";import"./ActionButton-DudpqNmL.js";import"./Checkbox-Cw0OjqdD.js";import"./useValueChanged-R62FXs_N.js";import"./CollapsiblePanel-74GeumXY.js";import"./MultiColumnSortDialog--YgHyIyy.js";import"./MenuTrigger-gGiqxUYZ.js";import"./CompositeItem-GKFr0mZp.js";import"./ToolbarRootContext-dI5H3gst.js";import"./getDisabledMountTransitionStyles-Dqbr5jIl.js";import"./getPseudoElementBounds-Do85zsEf.js";import"./chevron-down-QowdN_dJ.js";import"./index-Bi1g2iim.js";import"./error-BijATQGq.js";import"./BaseCbacBanner-VgUAaZoc.js";import"./makeExternalStore-DxNQWYP7.js";import"./Tooltip-BB4biWHU.js";import"./PopoverPopup-Zw1VqF60.js";import"./debounce-BSTm8Z6M.js";import"./useOsdkClient-CZiykm71.js";import"./tick-D6fAtfPQ.js";import"./DropdownField-DMszTIIw.js";import"./isEqual-CPsrx-FY.js";import"./withOsdkMetrics-DhZ_7yXB.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
