import{j as i}from"./iframe-BFrg0_G6.js";import{O as p}from"./object-table-BQFGNH6O.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C8RRm9z6.js";import"./preload-helper-DCHyxNf-.js";import"./Table-ClicbuUG.js";import"./index-BbTS_0ql.js";import"./Dialog-S3hdR67Z.js";import"./cross-C40Lh1kR.js";import"./svgIconContainer-C3A4Lnit.js";import"./useBaseUiId-E-s0fCKQ.js";import"./InternalBackdrop-CVpAxoCf.js";import"./composite-Bj_txaLg.js";import"./index-Dgz7cx6a.js";import"./index-Cqvom3Bd.js";import"./index-B3ZK8qnH.js";import"./useEventCallback-Y9RnUuzz.js";import"./SkeletonBar-BaoAoEVg.js";import"./LoadingCell-Cuq1qZhv.js";import"./ColumnConfigDialog-CPlCFIe0.js";import"./DraggableList-COxbKZaT.js";import"./search-PML7rR61.js";import"./Input-BW0b3JTl.js";import"./useControlled-BXk3f0MQ.js";import"./isEqual-CM9VzvJ7.js";import"./isObject-BnbKJ4JJ.js";import"./Button-DEq5-vBs.js";import"./ActionButton-qfhKDPFU.js";import"./Checkbox-CP146FOM.js";import"./useValueChanged-DnUQ4fbh.js";import"./CollapsiblePanel-i50tYBKz.js";import"./MultiColumnSortDialog-DdkoWIgs.js";import"./MenuTrigger-bYYHu19W.js";import"./CompositeItem-Duz7YqvH.js";import"./ToolbarRootContext-y5WYMk6Y.js";import"./getDisabledMountTransitionStyles-BlMi4syj.js";import"./getPseudoElementBounds-DVJQtV8T.js";import"./chevron-down-DdY7c1tH.js";import"./index-D3rKwtfg.js";import"./error-iK44Tvf9.js";import"./BaseCbacBanner-CWwx3Afm.js";import"./makeExternalStore-9ImN4-B2.js";import"./Tooltip-C_Qc6J3-.js";import"./PopoverPopup-Xyx0b8Pc.js";import"./toNumber-BpUY5ylB.js";import"./useOsdkClient-D7WwNihV.js";import"./tick-DqBG9l3K.js";import"./DropdownField-C4PWOhQL.js";import"./withOsdkMetrics-fB2lnNbV.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
