import{j as i}from"./iframe-B7aJzwbo.js";import{O as p}from"./object-table-BA38ri4w.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-N9aWj74S.js";import"./preload-helper-eRVNIb5p.js";import"./Table-DHAUBTfV.js";import"./index-RdZvG0OW.js";import"./Dialog-Dc6kQRcA.js";import"./cross-B1O6ebQi.js";import"./svgIconContainer-CdK9JNQh.js";import"./useBaseUiId-CkpX5NB7.js";import"./InternalBackdrop-CCGHrTok.js";import"./composite-HBnNRj0V.js";import"./index-8RrkNowe.js";import"./index-CkeudptZ.js";import"./index-7YIR26jv.js";import"./useEventCallback-BnLqpuJa.js";import"./SkeletonBar-C0OTRwFB.js";import"./LoadingCell-DnbsiJg3.js";import"./ColumnConfigDialog-CB497VjP.js";import"./DraggableList-B8mPrhwS.js";import"./search-CZmCb7y8.js";import"./Input-qBFcNfHq.js";import"./useControlled-BukasUFK.js";import"./Button-C-woLY16.js";import"./small-cross-CNtYeUul.js";import"./ActionButton-DUUDtffd.js";import"./Checkbox-CPEg9uHI.js";import"./useValueChanged-C6TaqKGn.js";import"./CollapsiblePanel-DOUntJrC.js";import"./MultiColumnSortDialog-a30AKw6B.js";import"./MenuTrigger-DCPrp2MJ.js";import"./CompositeItem-D0hFRJVg.js";import"./ToolbarRootContext-NP1s66to.js";import"./getDisabledMountTransitionStyles-zUIg4MN2.js";import"./getPseudoElementBounds-CvilJ6ol.js";import"./chevron-down-BK8JqzlO.js";import"./index-DALXba2W.js";import"./error-CWUTjlhY.js";import"./BaseCbacBanner-5DfHjm3U.js";import"./makeExternalStore--7xxm-Xg.js";import"./Tooltip-C9jwtRtJ.js";import"./PopoverPopup-DN9sGOVC.js";import"./debounce-B7x7S7rs.js";import"./useOsdkClient-CeMWOo2K.js";import"./tick-BbAB870P.js";import"./DropdownField-DAAdN4xL.js";import"./isEqual-D-93a5AU.js";import"./withOsdkMetrics-4AR2Wafq.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
