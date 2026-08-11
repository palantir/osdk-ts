import{j as i}from"./iframe-BYI6-aLw.js";import{O as p}from"./object-table-zEM50Veu.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BlEgSn9i.js";import"./preload-helper-BtPj2gQg.js";import"./Table-CCnRPler.js";import"./index-DQ7c9deP.js";import"./Dialog-KvswP73d.js";import"./cross-DFx6KUE4.js";import"./svgIconContainer-BBpZUtxO.js";import"./useBaseUiId-1B5Tp9l6.js";import"./InternalBackdrop-B9c7BTIV.js";import"./composite-CifwDKrs.js";import"./index-jdHVExti.js";import"./index-DK8-M2ZQ.js";import"./index-Cukieq_M.js";import"./useEventCallback-Ck3YSB-4.js";import"./SkeletonBar-Dk1hIZHl.js";import"./LoadingCell-IfAFJP-m.js";import"./ColumnConfigDialog-DurdO-8J.js";import"./DraggableList-C0Fm2bWv.js";import"./search-CaXxmA8i.js";import"./Input-BkuGir8f.js";import"./useControlled-BZTNruXv.js";import"./isEqual-DD0yAfPL.js";import"./isObject-DVx9CejI.js";import"./Button-CRUJ4RF7.js";import"./ActionButton-7I4whYFr.js";import"./Checkbox-DjhQrfry.js";import"./useValueChanged-D9OSL-KB.js";import"./CollapsiblePanel-C4Y208nn.js";import"./MultiColumnSortDialog-B-Nm9AsS.js";import"./MenuTrigger-DZHsQamD.js";import"./CompositeItem-DfD4viOC.js";import"./ToolbarRootContext-D3speQHo.js";import"./getDisabledMountTransitionStyles-CWCq6Lcx.js";import"./getPseudoElementBounds-DC5DSIf6.js";import"./chevron-down-BDf7yWi1.js";import"./index-ClnbUonH.js";import"./error-DLiUuB2F.js";import"./BaseCbacBanner-CYen8Dov.js";import"./makeExternalStore-KpAAX1cn.js";import"./Tooltip-CvKrhMsi.js";import"./PopoverPopup-CwpMKFB5.js";import"./toNumber-dovyYQeg.js";import"./useOsdkClient-D-RzPK7q.js";import"./tick-C-01gZNd.js";import"./DropdownField-BnQEUnfj.js";import"./withOsdkMetrics-WrHGmE29.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
