import{j as i}from"./iframe-ClmmZ3bm.js";import{O as p}from"./object-table-DsatPqbe.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C0ajL7r7.js";import"./preload-helper-BZo60ewl.js";import"./Table-D1bwUrEg.js";import"./index-DIDi76XU.js";import"./Dialog-CIfkEYR7.js";import"./cross-BZIbyAfw.js";import"./svgIconContainer-CXmUB5_k.js";import"./useBaseUiId-WUEu06gE.js";import"./InternalBackdrop-3GGPa-k1.js";import"./composite-DFQP3WzO.js";import"./index-BVYmTNrb.js";import"./index-Bq9s53kA.js";import"./index-Z45XLqZB.js";import"./useEventCallback-BNKXZA_K.js";import"./SkeletonBar-zmrRzeWk.js";import"./LoadingCell-moQ8ecqY.js";import"./ColumnConfigDialog-CjawNvRx.js";import"./DraggableList-au3wpCID.js";import"./search-BSdPNEqM.js";import"./Input-prqFStI6.js";import"./useControlled-DgsYzmvX.js";import"./Button-BC65lBcv.js";import"./small-cross-Hnp_Cop5.js";import"./ActionButton-CmUSS7TV.js";import"./Checkbox-Bo232Iw9.js";import"./useValueChanged-BYcMVQkQ.js";import"./CollapsiblePanel-DLONQ99q.js";import"./MultiColumnSortDialog-Dvdstylu.js";import"./MenuTrigger-CQM2fZ-t.js";import"./CompositeItem-By3QnrLx.js";import"./ToolbarRootContext-BOxraJ6v.js";import"./getDisabledMountTransitionStyles-NPU84L0j.js";import"./getPseudoElementBounds-BgBAgWR8.js";import"./chevron-down-cWg0tuLd.js";import"./index-BYMK15VD.js";import"./error-joC9U9D6.js";import"./BaseCbacBanner-DvElSbKs.js";import"./makeExternalStore-BNsO-POR.js";import"./Tooltip-L4sylTo8.js";import"./PopoverPopup-DNr0L3gG.js";import"./debounce-XQlAyE-7.js";import"./useOsdkClient-CKzk92mD.js";import"./tick-CId6S-tg.js";import"./DropdownField-CnAzqUOi.js";import"./isEqual-DQPARruA.js";import"./withOsdkMetrics-3RKVNbyO.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
